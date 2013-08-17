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
			});
		}
	});
});