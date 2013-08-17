define([
	"jquery",
	"underscore",
	"backbone",
	"app/collections/Peoples.Collection",
	"app/views/Peoples.View",
	"bootstrap"
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
		},
		events: {
			"checkedin .people": "checkedin",
			"keyup #searchbar input": "keyup",
			"hidden .checkinSuccess": "endSearch"
		},
		checkedin: function() {
			this.$(".checkinSuccess").modal("show");
			
		},
		keyup: function(e) {
			var val = $(e.target).val();
			this.peoplesView.filterBySearch(val);
		},
		endSearch: function(e) {
			this.$("#searchbar input").val("");
			this.peoplesView.endSearch();
		}
	});
});