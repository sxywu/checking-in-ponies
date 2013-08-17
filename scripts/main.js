require.config({
	baseUrl: "scripts/contrib/",
	paths: {
		"app": "..",
		"underscore": "underscore",
		"backbone": "backbone",
		"bootstrap": "bootstrap"
	},
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

require([
	"jquery",
	"underscore",
	"backbone",
	"app/collections/Peoples.Collection"
], function(
	$,
	_,
	Backbone,
	PeoplesCollection
) {
	var pc = new PeoplesCollection();
	pc.fetch();
});