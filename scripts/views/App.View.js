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
			"checkedout .people": "endSearch",
			"keyup #searchbar input": "keyup",
			"hidden .checkinSuccess": "endSearch",
			"click .add": "addPerson"
		},
		checkedin: function() {
			this.$(".checkinSuccess").modal("show");
			
		},
		keyup: function(e) {
			var val = $(e.target).val(),
				key = e.which,
				ESC_KEY = 27;

			if (key === ESC_KEY) {
				$(e.target).blur();
			} else {
				this.peoplesView.filterBySearch(val);
				this.showAddButton();
				this.$("#searchbar").addClass("input-append");
			}

		},
		addPerson: function() {

		},
		showAddButton: function(e) {
			this.$(".add").show();
		},
		hideAddButton: function(e) {
			this.$(".add").hide();
		},
		endSearch: function(e) {
			this.$("#searchbar input").val("");
			this.peoplesView.endSearch();

			this.$("#searchbar").removeClass("input-append");
			this.hideAddButton();
		}
	});
});