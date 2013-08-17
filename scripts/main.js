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
	"app/views/App.View"
], function(
	$,
	_,
	Backbone,
	AppView
) {
	var appView = new AppView();
	appView.render();
});