const Lang = imports.lang;
const Main = imports.ui.main;

function init() {
	Main.layoutManager.connect('startup-complete', Lang.bind(this, function () { 
			Main.overview._dash.actor.hide();
		
// 		        Gnome 3.30 failure
// 			Main.overview._controls._thumbnailsBox.actor.destroy_all_children();
// 			Main.overview._controls._thumbnailsBox.actor.destroy();

// 			Main.overview._controls._thumbnailsSlider.actor.destroy_all_children();
// 			Main.overview._controls._thumbnailsSlider.actor.destroy();
		})
	);
}

function enable() {
	Main.overview._dash.actor.hide();
}

function disable() {
	Main.overview._dash.actor.show();
}
