const ComponentFactory = require('../ComponentFactory');

function SiteFadBar() {

    const siteFadBar = ComponentFactory.createComponent('siteFadBar');


    return {
        "title": "Site Find a Doctor Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteFadBarContext": siteFadBar
        }
    };
}

module.exports = new SiteFadBar();