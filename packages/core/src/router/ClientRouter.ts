/* @if server **
export class ClientRouter {};
/* @else */
import { RouteParams } from './AbstractRoute';
import { AbstractRouter } from './AbstractRouter';
import { ActionTypes } from './ActionTypes';
import { RouteFactory } from './RouteFactory';
import { RouteAction, RouteLocals, RouteOptions } from './Router';
import { Dependencies } from '..';
import { GenericError } from '../error/GenericError';
import { Dispatcher } from '../event/Dispatcher';
import { PageManager } from '../page/manager/PageManager';
import { RendererEvents } from '../page/renderer/RendererEvents';
import { StringParameters, UnknownParameters } from '../types';
import { Window } from '../window/Window';

/**
 * Names of the DOM events the router responds to.
 */
const Events = Object.freeze({
  /**
   * Name of the event produced when the user clicks the page using the
   * mouse, or touches the page and the touch event is not stopped.
   */
  CLICK: 'click',

  /**
   * Name of the event fired when the user navigates back in the history.
   */
  POP_STATE: 'popstate',
});

/**
 * The number used as the index of the mouse left button in DOM
 * `MouseEvent`s.
 */
const MOUSE_LEFT_BUTTON = 0;

/**
 * The client-side implementation of the {@link Router} interface.
 */
export class ClientRouter extends AbstractRouter {
  protected _window: Window;
  protected _boundHandleClick = (event: Event) =>
    this._handleClick(event as MouseEvent);
  protected _boundHandlePopState = (event: Event) =>
    this._handlePopState(event as PopStateEvent);

  /**
   * Mounted promise to prevent routing until app is fully mounted.
   */
  protected _mountedPromise: {
    promise: Promise<void>;
    resolve: () => void;
    reject: () => void;
  } | null = null;

  static get $dependencies(): Dependencies {
    return [
      PageManager,
      RouteFactory,
      Dispatcher,
      Window,
      // @ts-expect-error `FIXME`
      '?$Settings.$Router.middlewareTimeout',
    ];
  }

  /**
   * Initializes the client-side router.
   *
   * @param pageManager The page manager handling UI rendering,
   *        and transitions between pages if at the client side.
   * @param factory Factory for routes.
   * @param dispatcher Dispatcher fires events to app.
   * @param window The current global client-side APIs provider.
   * @param middlewareTimeout Middleware timeout value in ms.
   */
  constructor(
    pageManager: PageManager,
    factory: RouteFactory,
    dispatcher: Dispatcher,
    window: Window,
    middlewareTimeout: number | undefined
  ) {
    super(pageManager, factory, dispatcher, middlewareTimeout);

    /**
     * Helper for accessing the native client-side APIs.
     */
    this._window = window;
  }

  /**
   * @inheritDoc
   */
  init(config: {
    $Protocol: string;
    $Root: string;
    $LanguagePartPath: string;
    $Host: string;
  }) {
    super.init(config);
    this._host = config.$Host || this._window.getHost();
    this._dispatcher.listen(RendererEvents.MOUNTED, this.#handleMounted, this);

    return this;
  }

  async _preManage() {
    return Promise.all([
      super._preManage().then(() => {
        if (!this._mountedPromise?.promise) {
          this._mountedPromise = (() => {
            let resolve, reject;
            const promise = new Promise<void>((res, rej) => {
              resolve = res;
              reject = rej;
            });

            return {
              promise,
              resolve: resolve as unknown as () => void,
              reject: reject as unknown as () => void,
            };
          })();
        }
      }),
      this._mountedPromise?.promise,
    ]);
  }

  /**
   * @inheritDoc
   */
  getUrl() {
    return this._window.getUrl();
  }

  /**
   * @inheritDoc
   */
  getPath() {
    return this._extractRoutePath(this._window.getPath());
  }

  /**
   * @inheritDoc
   */
  listen() {
    const nativeWindow = this._window.getWindow();

    this._window.bindEventListener(
      nativeWindow as EventTarget,
      Events.POP_STATE,
      this._boundHandlePopState
    );

    this._window.bindEventListener(
      nativeWindow as EventTarget,
      Events.CLICK,
      this._boundHandleClick
    );

    return this;
  }

  /**
   * @inheritDoc
   */
  unlisten() {
    const nativeWindow = this._window.getWindow();

    this._window.unbindEventListener(
      nativeWindow as EventTarget,
      Events.POP_STATE,
      this._boundHandlePopState
    );

    this._window.unbindEventListener(
      nativeWindow as EventTarget,
      Events.CLICK,
      this._boundHandleClick
    );

    return this;
  }

  /**
   * @inheritDoc
   */
  redirect(
    url: string,
    options?: Partial<RouteOptions>,
    action?: RouteAction,
    locals?: RouteLocals
  ): void {
    if (this._isSameDomain(url)) {
      let path = url.replace(this.getDomain(), '');
      path = this._extractRoutePath(path);

      this.route(
        path,
        options,
        {
          type: ActionTypes.REDIRECT,
          event: undefined,
          ...action,
          url,
        },
        locals ?? {}
      );
    } else {
      this._window.redirect(url);
    }
  }

  /**
   * @inheritDoc
   */
  async route(
    path: string,
    options?: Partial<RouteOptions>,
    action?: RouteAction,
    locals?: RouteLocals
  ): Promise<void | UnknownParameters> {
    return super
      .route(
        path,
        options,
        {
          event: undefined,
          type: ActionTypes.REDIRECT,
          ...action,
          url: this.getBaseUrl() + path,
        },
        locals
      )
      .catch(error => this.handleError({ error }, {}, locals))
      .then(params => {
        // Hide error overlay
        if (!params?.error && $Debug && window.__IMA_HMR?.emitter) {
          window.__IMA_HMR.emitter.emit('clear');
        }

        return params;
      })
      .catch(error => {
        this._handleFatalError(error);
      });
  }

  /**
   * @inheritDoc
   */
  handleError(
    params: RouteParams,
    options?: Partial<RouteOptions>,
    locals?: RouteLocals
  ): Promise<void | UnknownParameters> {
    options = options ?? {};

    if ($Debug) {
      console.error(params.error);

      // Show error overlay
      if (window.__IMA_HMR?.emitter) {
        window.__IMA_HMR.emitter.emit('error', {
          // @ts-expect-error fix RouteParams in the future
          error: params.error as Error,
        });

        return Promise.reject({
          content: null,
          status: options.httpStatus || 500,
          error: params.error,
        });
      }
    }

    // @ts-expect-error fix RouteParams in the future
    const error = params.error as GenericError;

    if (this.isClientError(error)) {
      return this.handleNotFound(params as StringParameters, {}, locals);
    }

    if (this.isRedirection(error)) {
      const errorParams = error.getParams();
      options.httpStatus = error.getHttpStatus();
      const action = {
        event: undefined,
        type: ActionTypes.REDIRECT,
        url: errorParams.url as string,
      };

      this.redirect(
        errorParams.url as string,
        Object.assign(options, errorParams.options),
        Object.assign(action, errorParams.action),
        locals
      );

      return Promise.resolve({
        content: null,
        status: options.httpStatus,
        error: params.error,
      });
    }

    return super.handleError(params, options, locals).catch((error: Error) => {
      this._handleFatalError(error);
    });
  }

  /**
   * @inheritDoc
   */
  handleNotFound(params: StringParameters, options = {}, locals = {}) {
    return super.handleNotFound(params, options, locals).catch(error => {
      return this.handleError({ error }, {}, locals);
    });
  }

  /**
   * Handle a fatal error application state. IMA handle fatal error when IMA
   * handle error.
   *
   * @param error
   */
  _handleFatalError(error: Error) {
    if ($IMA && typeof $IMA.fatalErrorHandler === 'function') {
      $IMA.fatalErrorHandler(error);
    } else {
      if ($Debug) {
        console.warn(
          'You must implement $IMA.fatalErrorHandler in ' + 'services.js'
        );
      }
    }
  }

  /**
   * Handles a popstate event. The method is performed when the active history
   * entry changes.
   *
   * The navigation will be handled by the router if the event state is defined
   * and event is not `defaultPrevented`.
   *
   * @param event The popstate event.
   */
  _handlePopState(event: PopStateEvent) {
    if (event.state && !event.defaultPrevented) {
      this.route(
        this.getPath(),
        {},
        {
          type: ActionTypes.POP_STATE,
          event,
          url: this.getUrl(),
        }
      );
    }
  }

  /**
   * Handles a click event. The method performs navigation to the target
   * location of the anchor (if it has one).
   *
   * The navigation will be handled by the router if the protocol and domain
   * of the anchor's target location (href) is the same as the current,
   * otherwise the method results in a hard redirect.
   *
   * @param event The click event.
   */
  _handleClick(event: MouseEvent) {
    const target = event.target || event.srcElement;
    const anchorElement = this._getAnchorElement(
      target as Node
    ) as HTMLAnchorElement;

    if (!anchorElement || typeof anchorElement.href !== 'string') {
      return;
    }

    const targetAttribute = anchorElement.getAttribute('target');
    const anchorHref = anchorElement.href;
    const isDefinedTargetHref = anchorHref !== undefined && anchorHref !== null;
    const isSetTarget = targetAttribute !== null && targetAttribute !== '_self';
    const isLeftButton = event.button === MOUSE_LEFT_BUTTON;
    const isCtrlPlusLeftButton = event.ctrlKey && isLeftButton;
    const isCMDPlusLeftButton = event.metaKey && isLeftButton;
    const isSameDomain = this._isSameDomain(anchorHref);
    const isHashLink = this._isHashLink(anchorHref);
    const isLinkPrevented = event.defaultPrevented;

    if (
      !isDefinedTargetHref ||
      isSetTarget ||
      !isLeftButton ||
      !isSameDomain ||
      isHashLink ||
      isCtrlPlusLeftButton ||
      isCMDPlusLeftButton ||
      isLinkPrevented
    ) {
      return;
    }

    event.preventDefault();
    this.redirect(
      anchorHref,
      {},
      { type: ActionTypes.CLICK, event, url: anchorHref }
    );
  }

  /**
   * The method determines whether an anchor element or a child of an anchor
   * element has been clicked, and if it was, the method returns anchor
   * element else null.
   *
   * @param {Node} target
   * @return {?Node}
   */
  _getAnchorElement(target: Node) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    while (target && !hasReachedAnchor(target as HTMLAnchorElement)) {
      target = target.parentNode as Node;
    }

    function hasReachedAnchor(nodeElement: HTMLAnchorElement) {
      return (
        nodeElement.parentNode &&
        nodeElement !== self._window.getBody() &&
        nodeElement.href !== undefined &&
        nodeElement.href !== null
      );
    }

    return target;
  }

  /**
   * Tests whether the provided target URL contains only an update of the
   * hash fragment of the current URL.
   *
   * @param targetUrl The target URL.
   * @return `true` if the navigation to target URL would
   *         result only in updating the hash fragment of the current URL.
   */
  _isHashLink(targetUrl: string) {
    if (targetUrl.indexOf('#') === -1) {
      return false;
    }

    const currentUrl = this._window.getUrl();
    const trimmedCurrentUrl =
      currentUrl.indexOf('#') === -1
        ? currentUrl
        : currentUrl.substring(0, currentUrl.indexOf('#'));
    const trimmedTargetUrl = targetUrl.substring(0, targetUrl.indexOf('#'));

    return trimmedTargetUrl === trimmedCurrentUrl;
  }

  /**
   * Tests whether the the protocol and domain of the provided URL are the
   * same as the current.
   *
   * @param [url=''] The URL.
   * @return `true` if the protocol and domain of the
   *         provided URL are the same as the current.
   */
  _isSameDomain(url = '') {
    return new RegExp('^' + this.getBaseUrl()).test(url);
  }

  #handleMounted() {
    this._mountedPromise?.resolve();
    this._dispatcher.unlisten(
      RendererEvents.MOUNTED,
      this.#handleMounted,
      this
    );
  }
}
// @endif
