const Lang = imports.lang;
const Main = imports.ui.main;

function init() {
	Main.layoutManager.connect('startup-complete', Lang.bind(this, function () { 
			Main.overview._dash.hide();
		})
	);
}

function enable() {
	if (Main.overview._dash.hide) {
		Main.overview._dash.hide();
	}
}

function disable() {
	if (Main.overview._dash.show) {
		Main.overview._dash.show();
	}
}
