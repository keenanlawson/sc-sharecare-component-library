const ComponentFactory = require('../ComponentFactory');

function SiteAboutBar() {

    const siteAboutBar = ComponentFactory.createComponent('siteAboutBar');


    return {
        "title": "Site About Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteAboutBarContext": siteAboutBar
        }
    };
}

module.exports = new SiteAboutBar();