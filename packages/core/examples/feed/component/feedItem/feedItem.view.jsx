import ns from 'imajs/client/core/namespace.js';
import oc from 'imajs/client/core/objectContainer.js';
import bootstrap from 'imajs/client/core/bootstrap.js';

bootstrap.addComponent(() => {

	ns.namespace('App.Component.FeedItem');

	/**
	 * Feed writing.
	 * @class View
	 * @namespace App.Component.FeedItem
	 * @module App
	 * @submodule App.Component
	 */
	/* jshint ignore:start */
	ns.App.Component.FeedItem.View = React.createClass({
		render() {
			var DateComponentDiv = ns.App.Component.Date.View;
			var ShareDiv = ns.App.Component.Share.View;
			
			var entity = this.props.entity;
			var category = this.props.category;

			var sharedItemActive = this.props.sharedItem === entity;
			var singleItemClass = this.props.singleItem ? ' single-item' : '';

			var icon = this.getIcon(category);
			var hashTag = this.getHashTag(category);

			return (
				<div className={'feed-item' + singleItemClass}>
					{icon}
					<div className='content-wrapper'>
						<div
							className='content' 
							dangerouslySetInnerHTML={{__html: entity.getContent()}}>
						</div>
						
						<div className='toolbar'>
							{hashTag}
							<DateComponentDiv 
								date={entity.getPosted()} />
							<ShareDiv
								item={entity}
								category={category}
								active={sharedItemActive} />
						</div>
					</div>
				</div>
			);
		},

		getIcon(category) {
			if (category) {
				return (
					<div className='service-icon'>
						<img src={category.getIconUrl()} alt={category.getName()} />
					</div>);
			}
			return '';
		},

		getHashTag(category) {
			var router = oc.get('$Router');

			if (category) {
				var link = router.link('category', { category: category.getUrlName() });

				return (
					<a href={link}>{category.getHashTag()}</a>
				);
			}
			return '';
		}
	});
	/* jshint ignore:end */
});
