define([
	"jquery",
	"underscore",
	"backbone"
], function(
	$,
	_,
	Backbone
) {
	/*
	model of a person, member or non-member for this particular event.  attributes include:
	- Meetup id
	- info: {avatar, name, bio}
	- joined (date)
	- response (yes, no, waitlist)
	- number of guests
	- checkin
	*/
	return Backbone.Model.extend({
		initialize: function() {
			this.attributes.response = this.attributes.response || "no"; // default values in case 
			this.attributes.guests = this.attributes.guests || 0; // it's not provided
			this.attributes.checkin = this.attributes.checkin || "no";

			this.toggleShow();
			this.on("change", _.bind(this.toggleShow, this));
		},
		toggleShow: function() {
			if (this.get("response") === "no"
				&& this.get("checkin") === "no") {
				this.set("show", "no");
			} else {
				this.set("show", "yes");
			}
		}
	});
});