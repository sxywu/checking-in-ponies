define([
	"jquery",
	"underscore",
	"backbone",
	"app/models/People.Model"
], function(
	$,
	_,
	Backbone,
	PeopleModel
) {
	/*
	collection of all people, including members and nonmembers.
	*/
	return Backbone.Collection.extend({
		model: PeopleModel,
		/*
		fetch: temporary function that joins data/members.json and data/events.json
		once the backend is in place, this function will be replaced with a url function 
		for one AJAX call to the backend.
		*/
		fetch: function() {
			var that = this;
			$.get("/checking-in-ponies/data/members.json", function(members) {
				$.get("/checking-in-ponies/data/events.json", function(events) {
					var rsvps = events[0].rsvps,
						membersKey = {};
					_.each(members, function(member) {
						membersKey[member.id] = member;
					});
					_.each(rsvps, function(rsvp) {
						var member = membersKey[rsvp.id];
						member.guests = rsvp.guests;
						member.response = rsvp.response;
					});
					that.reset(members);
				});
			});
		},
		comparator: function(model) {
			return model.get("info").name;
		}
	});
});