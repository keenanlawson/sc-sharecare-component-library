const ComponentFactory = require('../ComponentFactory');

function Drawer() {

    const drawer = ComponentFactory.createComponent('drawer', {
        id: 'c-drawer-example',
        isVisible: true
    });

    return {
        "title": "Drawer",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "drawerContext": drawer
        }
    };
}

module.exports = new Drawer();