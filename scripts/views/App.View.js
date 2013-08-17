define([
	"jquery",
	"underscore",
	"backbone",
	"app/collections/Peoples.Collection",
	"app/views/Peoples.View"
], function(
	$,
	_,
	Backbone,
	PeoplesCollection,
	PeoplesView
) {
	return Backbone.View.extend({
		el: "body",
		initialize: function() {

		},
		render: function() {
			this.renderPeople();
		},
		/*
		populate the #people container
		*/
		renderPeople: function() {
			this.peoplesView = new PeoplesView({collection: new PeoplesCollection()});
			this.peoplesView.collection.fetch();
		}
	});
});