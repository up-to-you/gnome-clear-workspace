const Lang = imports.lang;
const Main = imports.ui.main;

function init() {
	Main.layoutManager.connect('startup-complete', Lang.bind(this, function () { 
			Main.overview._dash.hide();
		})
	);
}

function enable() {
	Main.overview._dash.hide();
}

function disable() {
	Main.overview._dash.show();
}
