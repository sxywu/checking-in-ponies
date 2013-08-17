define([
	"jquery",
	"underscore",
	"backbone",
	"text!app/templates/People.Template.html"
], function(
	$,
	_,
	Backbone,
	PeopleTemplate
) {
	return Backbone.View.extend({
		tagName: "span",
		className: "people",
		initialize: function() {
			this.model = this.options.model;
		},
		render: function() {
			this.$el.html(_.template(PeopleTemplate, this.model.attributes));
			if (this.model.get("response") === "no") {
				this.$el.hide();
			}
			return this;
		},
		/*
		make the pictures a perfect square (not working)
		*/
		makeSquare: function() {
			var $img = this.$(".memberImg img");
			console.log($img[0], $img.height(), $img.width());
			if ($img.height() > $img.width()) {
				$img.height(50);
			} else {
				$img.width(50);
			}
		}
	});
});