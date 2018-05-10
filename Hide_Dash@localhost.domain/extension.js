const Lang = imports.lang;
const Main = imports.ui.main;

function init() {
	Main.layoutManager.connect('startup-complete', Lang.bind(this, function () { 
			Main.overview._dash.actor.hide();
		})
	);
}

function enable() {
	Main.overview._dash.actor.hide();
}

function disable() {
	Main.overview._dash.actor.show();
}
