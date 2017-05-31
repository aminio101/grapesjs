define(function(require, exports, module){
  'use strict';
  var Component = require('./Component');

		module.exports = Component.extend({

			defaults: _.extend({}, Component.prototype.defaults, {
				droppable: false,
				editable: true,
			}),

			toHTML: function() {
				return this.get('content');
			},

		}, {

			isComponent: function(el) {
				var result = '';
				if(el.nodeType === 3){
					result = {
						type: 'textnode',
						content: el.textContent
					};
				}
				return result;
			},

		});
});