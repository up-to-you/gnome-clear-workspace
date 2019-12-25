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
			Main.overview._dash.hide();
		})
	);
}

function enable() {
	if (Main.overview._dash.hide) {
		Main.overview._dash.hide();
	}

	_connectOverviewEvents();
	_setTopPanelHiddenPosition();
	_hideTopPanel();
}

function disable() {
	if (Main.overview._dash.show) {
		Main.overview._dash.show();
	}

	_disconnectOverviewEvents();
	_setTopPanelInitialPosition();
	_showTopPanel();
}

function _setTopPanelHiddenPosition() {
	PanelBox.set_position(0, PANEL_Y_POS - PANEL_HEIGHT);
}

function _setTopPanelInitialPosition() {
	PanelBox.set_position(0, PANEL_Y_POS);
    PanelBox.actor.translation_y = 0;
}

function _hideTopPanel() {
    Tweener.addTween(PanelBox.actor, { translation_y: 0, time: PANEL_ANIM_TIME });
}

function _showTopPanel() {
    Tweener.addTween(PanelBox.actor, { translation_y: PANEL_HEIGHT, time: PANEL_ANIM_TIME });
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
