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
	- checkin (time, default no)
	*/
	return Backbone.Model.extend({
		initialize: function() {
			this.attributes.response = this.attributes.response || "no"; // default values in case 
			this.attributes.guests = this.attributes.guests || 0; // it's not provided
		}
	});
});