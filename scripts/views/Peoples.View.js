define([
	"jquery",
	"underscore",
	"backbone",
	"app/views/People.View"
], function(
	$,
	_,
	Backbone,
	PeopleView
) {
	/*
	view for #people
	this.collection: instance of PeoplesCollection
	*/
	return Backbone.View.extend({
		el: "#people",
		initialize: function() {
			this.collection = this.options.collection;

			this.collection.on("reset", _.bind(this.renderPeople, this));
		},
		renderPeople: function() {
			var view,
				that = this;
			this.collection.each(function(model) {
				view = new PeopleView({model: model});
				that.$el.append(view.render().el);

				model.view = view;
			});
		},
		filterBySearch: function(val) {
			this.$(".people").addClass("hideView");
			var regex = new RegExp(val, "gi");
			this.collection.each(function(model) {
				if (regex.test(model.get("info").name)) {
					model.view.show();
				}
			});
		},
		endSearch: function() {
			this.$(".people").addClass("hideView");
			this.$(".people.yesshow").removeClass("hideView");
		}
	});
});