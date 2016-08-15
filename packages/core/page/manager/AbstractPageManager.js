import ns from '../../namespace';
import PageManager from './PageManager';
import PageFactory from '../PageFactory';
import AbstractDocumentView from '../AbstractDocumentView';
import PageRenderer from '../renderer/PageRenderer';
import PageStateManager from '../state/PageStateManager';
import AbstractController from '../../controller/AbstractController';
import Controller from '../../controller/Controller';
import ControllerDecorator from '../../controller/ControllerDecorator';
import GenericError from '../../error/GenericError';

ns.namespace('ima.page.manager');

/**
 * Page manager for controller.
 *
 * @class AbstractPageManager
 * @implements PageManager
 * @namespace ima.page.manager
 * @module ima
 * @submodule ima.page
 */
export default class AbstractPageManager extends PageManager {

	/**
	 * Initializes the page manager.
	 *
	 * @method constructor
	 * @constructor
	 * @param {PageFactory} pageFactory Factory used by the page manager to
	 *        create instances of the controller for the current route, and
	 *        decorate the controllers and page state managers.
	 * @param {PageRenderer} pageRenderer The current renderer of the page.
	 * @param {PageStateManager} pageStateManager The current page state
	 *        manager.
	 */
	constructor(pageFactory, pageRenderer, pageStateManager) {
		super();

		/**
		 * Factory used by the page manager to create instances of the
		 * controller for the current route, and decorate the controllers and
		 * page state managers.
		 * 
		 * @protected
		 * @property _pageFactory
		 * @type {PageFactory}
		 * @default pageFactory
		 */
		this._pageFactory = pageFactory;

		/**
		 * The current renderer of the page.
		 * 
		 * @protected
		 * @property _pageRenderer
		 * @type {PageRenderer}
		 * @default pageRenderer
		 */
		this._pageRenderer = pageRenderer;

		/**
		 * The current page state manager.
		 * 
		 * @protected
		 * @property _pageStateManager
		 * @type {PageStateManager}
		 * @default pageStateManager
		 */
		this._pageStateManager = pageStateManager;

		/**
		 * Details of the currently managed page.
		 * 
		 * @protected
		 * @property _managedPage
		 * @type {{
		 *         controller: ?(string|function(new: Controller)),
		 *         controllerInstance: ?Controller,
		 *         decoratedController: ?Controller,
		 *         view: ?React.Component,
		 *         viewInstance: ?React.Element,
		 *         options: ?{
		 *           onlyUpdate: (
		 *             boolean|
		 *             function(
		 *               (string|function(new: Controller)),
		 *               function(new: React.Component,
		 *                Object<string, *>,
		 *                ?Object<string, *>
		 *              )
		 *             ): boolean
		 *           ),
		 *           autoScroll: boolean,
		 *           allowSPA: boolean,
 		 *           documentView: ?AbstractDocumentView
		 *         },
		 *         params: ?Object<string, string>,
		 *         state: {
		 *           activated: boolean
		 *         }
		 *       }}
		 */
		this._managedPage = {};
	}

	/**
	 * @inheritdoc
	 * @method init
	 */
	init() {
		this._clearManagedPageValue();
		this._pageStateManager.onChange = (newState) => {
			this._onChangeStateHandler(newState);
		};
	}

	/**
	 * @inheritdoc
	 * @method manage
	 */
	manage(controller, view, options, params = {}) {
		this._preManage(options);

		if (this._hasOnlyUpdate(controller, view, options)) {
			this._managedPage.params = params;

			return this._updatePageSource();
		}

		let pageFactory = this._pageFactory;
		let controllerInstance = pageFactory.createController(controller);
		let decoratedController = pageFactory.decorateController(
			controllerInstance
		);
		let viewInstance = pageFactory.createView(view);

		this._deactivatePageSource();
		this._destroyPageSource();

		this._storeManagedPageValue(
			controller,
			view,
			options,
			params,
			controllerInstance,
			decoratedController,
			viewInstance
		);

		this._initPageSource();

		return this._loadPageSource();
	}

	/**
	 * @abstract
	 * @inheritdoc
	 * @method scrollTo
	 */
	scrollTo(x = 0, y = 0) {
		throw new GenericError('The scrollTo() method is abstract and must ' +
				'be overridden.');
	}

	/**
	 * @inheritdoc
	 * @method destroy
	 */
	destroy() {
		this._pageStateManager.onChange = null;

		this._deactivatePageSource();
		this._destroyPageSource();

		this._clearManagedPageValue();
	}

	/**
	 * @protected
	 * @method _storeManagedPageValue
	 * @param {(string|function)} controller
	 * @param {(string|function)} view
	 * @param {{
	 *          onlyUpdate: (
	 *            boolean|
	 *            function(
	 *              (string|function(new: Controller)),
	 *              function(new: React.Component,
	 *                Object<string, *>,
	 *                ?Object<string, *>
	 *              )
	 *            ): boolean
	 *          ),
	 *          autoScroll: boolean,
	 *          allowSPA: boolean,
 	 *          documentView: ?AbstractDocumentView
	 *        }} options
	 * @param {Object<string, string>} params The route parameters.
	 * @param {AbstractController} controllerInstance
	 * @param {ControllerDecorator} decoratedController
	 * @param {React.Component} viewInstance
	 */
	_storeManagedPageValue(controller, view, options, params,
			controllerInstance, decoratedController, viewInstance) {
		this._managedPage = {
			controller,
			controllerInstance,
			decoratedController,
			view,
			viewInstance,
			options,
			params,
			state: {
				activated: false
			}
		};
	}

	/**
	 * Clear value from managed page.
	 *
	 * @protected
	 * @method _clearManagedPageValue
	 */
	_clearManagedPageValue() {
		this._managedPage = {
			controller: null,
			controllerInstance: null,
			decoratedController: null,
			view: null,
			viewInstance: null,
			options: null,
			params: null,
			state: {
				activated: false
			}
		};
	}

	/**
	 * Set page state manager to extension which has restricted rights to set
	 * global state.
	 *
	 * @private
	 * @method _setRestrictedPageStateManager
	 * @param {ima.extension.Extension} extension
	 * @param {Object<string, *>} extensionState
	 */
	_setRestrictedPageStateManager(extension, extensionState) {
		let stateKeys = Object.keys(extensionState);
		let allowedKey = extension.getAllowedStateKeys();
		let allAllowedStateKeys = stateKeys.concat(allowedKey);

		let pageFactory = this._pageFactory;
		let decoratedPageStateManager = pageFactory.decoratePageStateManager(
			this._pageStateManager,
			allAllowedStateKeys
		);

		extension.setPageStateManager(decoratedPageStateManager);
	}

	/**
	 * Initialize page source so call init method on controller and his
	 * extensions.
	 *
	 * @protected
	 * @method _initPageSource
	 */
	_initPageSource() {
		this._initController();
		this._initExtensions();
	}

	/**
	 * Initializes managed instance of controller with the provided parameters.
	 *
	 * @protected
	 * @method _initController
	 */
	_initController() {
		let controller = this._managedPage.controllerInstance;

		controller.setRouteParams(this._managedPage.params);
		controller.init();
	}

	/**
	 * Initialize extensions for managed instance of controller with the
	 * provided parameters.
	 *
	 * @protected
	 * @method _initExtensions
	 */
	_initExtensions() {
		let controller = this._managedPage.controllerInstance;

		for (let extension of controller.getExtensions()) {
			extension.setRouteParams(this._managedPage.params);
			extension.init();
		}
	}

	/**
	 * Load page source so call load method on controller and his extensions.
	 * Merge loaded state and render it.
	 *
	 * @protected
	 * @method _loadPageSource
	 * @return {Object<string, (Promise<*>|*)>}
	 */
	_loadPageSource() {
		let controllerState = this._getLoadedControllerState();
		let extensionsState = this._getLoadedExtensionsState();
		let loadedPageState = Object.assign(
			{},
			extensionsState,
			controllerState
		);

		return (
			this._pageRenderer
				.mount(
					this._managedPage.decoratedController,
					this._managedPage.view,
					loadedPageState,
					this._managedPage.options
				)
				.then((response) => {
					this._postManage(this._managedPage.options);

					return response;
				})
		);
	}

	/**
	 * Load controller state from managed instance of controller.
	 *
	 * @protected
	 * @method _getLoadedControllerState
	 * @return {Object<string, (Promise<*>|*)>}
	 */
	_getLoadedControllerState() {
		let controller = this._managedPage.controllerInstance;
		let controllerState = controller.load();

		controller.setPageStateManager(this._pageStateManager);

		return controllerState;
	}

	/**
	 * Load extensions state from managed instance of controller.
	 *
	 * @protected
	 * @method _getLoadedExtensionsState
	 * @return {Object<string, (Promise<*>|*)>}
	 */
	_getLoadedExtensionsState() {
		let controller = this._managedPage.controllerInstance;
		let extensionsState = {};

		for (let extension of controller.getExtensions()) {
			let extensionState = extension.load();

			this._setRestrictedPageStateManager(extension, extensionState);
			Object.assign(extensionsState, extensionState);
		}

		return extensionsState;
	}

	/**
	 * Activate page source so call activate method on controller and his
	 * extensions.
	 *
	 * @protected
	 * @method _activatePageSource
	 */
	_activatePageSource() {
		let controller = this._managedPage.controllerInstance;
		let isNotActivated = !this._managedPage.state.activated;

		if (controller && isNotActivated) {
			this._activateController();
			this._activateExtensions();
			this._managedPage.state.activated = true;
		}
	}

	/**
	 * Activate managed instance of controller.
	 *
	 * @protected
	 * @method _activateController
	 */
	_activateController() {
		let controller = this._managedPage.controllerInstance;

		controller.activate();
	}

	/**
	 * Activate extensions for managed instance of controller.
	 *
	 * @protected
	 * @method _activateExtensions
	 */
	_activateExtensions() {
		let controller = this._managedPage.controllerInstance;

		for (let extension of controller.getExtensions()) {
			extension.activate();
		}
	}

	/**
	 * Update page source so call update method on controller and his
	 * extensions. Merge updated state and render it.
	 *
	 * @protected
	 * @method _updatePageSource
	 * @return {Promise<{status: number, content: ?string}>}
	 */
	_updatePageSource() {
		let updatedControllerState = this._getUpdatedControllerState();
		let updatedExtensionState = this._getUpdatedExtensionsState();
		let updatedPageState = Object.assign(
			{},
			updatedExtensionState,
			updatedControllerState
		);

		return (
			this._pageRenderer
				.update(
					this._managedPage.decoratedController,
					updatedPageState
				)
				.then((response) => {
					this._postManage(this._managedPage.options);

					return response;
				})
		);
	}

	/**
	 * Return updated controller state for current page controller.
	 *
	 * @protected
	 * @method _getUpdatedControllerState
	 * @return {Object<string, (Promise<*>|*)>}
	 */
	_getUpdatedControllerState() {
		let controller = this._managedPage.controllerInstance;
		let lastRouteParams = controller.getRouteParams();

		controller.setRouteParams(this._managedPage.params);

		return controller.update(lastRouteParams);
	}

	/**
	 * Return updated extensions state for current page controller.
	 *
	 * @protected
	 * @method _getUpdatedExtensionsState
	 * @return {Object<string, (Promise|*)>}
	 */
	_getUpdatedExtensionsState() {
		let controller = this._managedPage.controllerInstance;
		let extensionsState = {};

		for (let extension of controller.getExtensions()) {
			let lastRouteParams = extension.getRouteParams();
			let extensionState = extension.update(lastRouteParams);

			this._setRestrictedPageStateManager(extension, extensionState);
			Object.assign(extensionsState, extensionState);
		}

		return extensionsState;
	}

	/**
	 * Deactivate page source so call deactivate method on controller and his
	 * extensions.
	 *
	 * @protected
	 * @method _deactivatePageSource
	 */
	_deactivatePageSource() {
		let controller = this._managedPage.controllerInstance;
		let isActivated = this._managedPage.state.activated;

		if (controller && isActivated) {
			this._deactivateExtensions();
			this._deactivateController();
		}
	}

	/**
	 * Deactivate last managed instance of controller only If controller was
	 * activated.
	 *
	 * @protected
	 * @method _deactivateController
	 */
	_deactivateController() {
		let controller = this._managedPage.controllerInstance;

		controller.deactivate();
	}

	/**
	 * Deactivate extensions for last managed instance of controller only if
	 * they were activated.
	 *
	 * @protected
	 * @method _deactivateExtensions
	 */
	_deactivateExtensions() {
		let controller = this._managedPage.controllerInstance;

		for (let extension of controller.getExtensions()) {
			extension.deactivate();
		}
	}

	/**
	 * Destroy page source so call destroy method on controller and his
	 * extensions.
	 *
	 * @protected
	 * @method _destroyPageSource
	 */
	_destroyPageSource() {
		let controller = this._managedPage.controllerInstance;

		if (controller) {
			this._destroyExtensions();
			this._destroyController();

			this._pageStateManager.clear();
			this._pageRenderer.unmount();
			this._clearManagedPageValue();
		}
	}

	/**
	 * Destroy last managed instance of controller.
	 *
	 * @protected
	 * @method _destroyController
	 */
	_destroyController() {
		let controller = this._managedPage.controllerInstance;

		controller.destroy();
		controller.setPageStateManager(null);
	}

	/**
	 * Destroy extensions for last managed instance of controller.
	 *
	 * @protected
	 * @method _destroyExtensions
	 */
	_destroyExtensions() {
		let controller = this._managedPage.controllerInstance;

		for (let extension of controller.getExtensions()) {
			extension.destroy();
			extension.setPageStateManager(null);
		}
	}

	/**
	 * On change event handler set state to view.
	 *
	 * @private
	 * @method _onChangeStateHandler
	 * @param {Object<string, *>} state
	 */
	_onChangeStateHandler(state) {
		let controller = this._managedPage.controllerInstance;

		if (controller) {
			this._pageRenderer.setState(state);
		}
	}

	/**
	 * Return true if manager has to update last managed controller and view.
	 *
	 * @protected
	 * @method _hasOnlyUpdate
	 * @param {string|function} controller
	 * @param {string|function} view
	 * @param {{
	 *          onlyUpdate: (
	 *            boolean|
	 *            function(
	 *              (string|function(new: Controller)),
	 *              function(new: React.Component,
	 *                Object<string, *>,
	 *                ?Object<string, *>
	 *              )
	 *            ): boolean
	 *          ),
	 *          autoScroll: boolean,
 	 *          allowSPA: boolean,
 	 *          documentView: ?AbstractDocumentView
 	 *        }} options
	 * @return {boolean}
	 */
	_hasOnlyUpdate(controller, view, options) {
		if (options.onlyUpdate instanceof Function) {
			return options.onlyUpdate(
				this._managedPage.controller,
				this._managedPage.view
			);
		}

		return options.onlyUpdate &&
				this._managedPage.controller === controller &&
				this._managedPage.view === view;
	}

	/**
	 * Make defined instruction as scroll for current page options before than
	 * change page.
	 *
	 * @protected
	 * @method _preManage
	 * @param {{
	 *          onlyUpdate: (
	 *            boolean|
	 *            function(
	 *              (string|function(new: Controller)),
	 *              function(new: React.Component,
	 *                Object<string, *>,
	 *                ?Object<string, *>
	 *              )
	 *            ): boolean
	 *          ),
	 *          autoScroll: boolean,
 	 *          allowSPA: boolean,
 	 *          documentView: ?AbstractDocumentView
 	 *        }} options
	 */
	_preManage(options) {
		if (options.autoScroll) {
			this.scrollTo();
		}
	}

	/**
	 * Make defined instruction for current page options after that
	 * changed page.
	 *
	 * @protected
	 * @method _postManage
	 * @param {{
	 *          onlyUpdate: (
	 *            boolean|
	 *            function(
	 *              (string|function(new: Controller)),
	 *              function(new: React.Component,
	 *                Object<string, *>,
	 *                ?Object<string, *>
	 *              )
	 *            ): boolean
	 *          ),
	 *          autoScroll: boolean,
 	 *          allowSPA: boolean,
 	 *          documentView: ?AbstractDocumentView
 	 *        }} options
	 */
	_postManage(options) {}

}

ns.ima.page.manager.AbstractPageManager = AbstractPageManager;
