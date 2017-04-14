const ComponentFactory = require('../ComponentFactory');

function SiteLogosBar() {

    const siteLogosBar = ComponentFactory.createComponent('siteLogosBar');


    return {
        "title": "Site Logos Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteLogosBarContext": siteLogosBar
        }
    };
}

module.exports = new SiteLogosBar();