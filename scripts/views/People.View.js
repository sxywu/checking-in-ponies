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

			this.model.on("change:checkin", _.bind(this.render, this));
			this.model.on("change:show", _.bind(this.render, this));
		},
		render: function() {
			this.$el.html(_.template(PeopleTemplate, this.model.attributes));
			this.shouldHide();
			return this;
		},
		/*
		if model says to hide, hide the element.  else show.
		*/
		shouldHide: function() {
			if (this.model.get("show") === "no") {
				this.$el.removeClass("yesshow");
				this.hide();
			} else {
				this.$el.addClass("yesshow");
				this.show();
			}
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
		},
		events: {
			"click": "checkin"
		},
		checkin: function() {
			// toggle checkin
			if (this.model.get("checkin") === "no") {
				this.model.set("checkin", new Date());
				this.$el.trigger("checkedin");
			} else {
				this.model.set("checkin", "no");
				this.$el.trigger("checkedout");
			}
		},
		show: function() {
			this.$el.removeClass("hideView");
			this.$(".memberImg img").attr("src", this.model.get("info").avatar);
		},
		hide: function() {
			this.$el.addClass("hideView");
			this.$(".memberImg img").attr("src", "");
		}
	});
});