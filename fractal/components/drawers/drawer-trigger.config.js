const ComponentFactory = require('../ComponentFactory');

function DrawerTrigger() {

    const drawerTrigger = ComponentFactory.createComponent('drawerTrigger', {
        id: 'c-drawer-example'
    });

    return {
        "title": "Drawer Trigger",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "drawerContext": drawerTrigger
        }
    };
}

module.exports = new DrawerTrigger();