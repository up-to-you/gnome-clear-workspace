const Lang = imports.lang;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const PanelBox = Main.layoutManager.panelBox;

const PANEL_ANIM_TIME = 0.0;
const PANEL_Y_POS = PanelBox.get_y();
const PANEL_HEIGHT = PanelBox.get_height();

let connectedShowEvent, connectedHideEvent;

function init() {
	Main.layoutManager.connect('startup-complete', Lang.bind(this, function () { 
		Main.overview.dash.hide();
	}));
}

function enable() {
	if (Main.overview.dash.hide) {
		Main.overview.dash.hide();
	}

	_substituteSetPositionFunc();

	_setTopPanelHiddenPosition();
	_connectOverviewEvents();
}

function disable() {
	if (Main.overview.dash.show) {
		Main.overview.dash.show();
	}

	_disconnectOverviewEvents();
	_setTopPanelInitialPosition();

	PanelBox.set_position = PanelBox.set_position_hidden;
	PanelBox.set_position_hidden = undefined;
}

function _substituteSetPositionFunc() {
	let set_position_original = PanelBox.set_position;
	// stub
	PanelBox.set_position = function(x, y) {};

	PanelBox.set_position_hidden = set_position_original;
}

function _setTopPanelHiddenPosition() {
	PanelBox.set_position_hidden(0, PANEL_Y_POS - PANEL_HEIGHT);
}

function _setTopPanelInitialPosition() {
	PanelBox.set_position_hidden(0, PANEL_Y_POS);
}

function _hideTopPanel() {
	Tweener.addTween(PanelBox, { translation_y: 0, time: PANEL_ANIM_TIME });
}

function _showTopPanel() {
	Tweener.addTween(PanelBox, { translation_y: PANEL_HEIGHT, time: PANEL_ANIM_TIME });
}

function _connectOverviewEvents() {
	connectedShowEvent = Main.overview.connect('showing', _showTopPanel);
    connectedHideEvent = Main.overview.connect('hiding', _hideTopPanel);
}

function _disconnectOverviewEvents() {
	if(connectedShowEvent) {
		Main.overview.disconnect(connectedShowEvent);		
	}
	if(connectedHideEvent) {
		Main.overview.disconnect(connectedHideEvent);		
	}
}
