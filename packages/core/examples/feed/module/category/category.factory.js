import ns from 'imajs/client/core/namespace.js';

ns.namespace('App.Module.Category');

/**
 * Factory to create category entity.
 *
 * @class Factory
 * @extends App.Base.EntityFactory
 * @namespace App.Module.Category
 * @module App
 * @submodule App.Module
 */
class Factory extends ns.App.Base.EntityFactory {
	/**
	 * @constructor
	 * @method constructor
	 */
	constructor() {
		super('CategoryEntity');
	}
}

ns.App.Module.Category.Factory = Factory;