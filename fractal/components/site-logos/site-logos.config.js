const ComponentFactory = require('../ComponentFactory');

function SiteLogos() {

    const siteLogos = ComponentFactory.createComponent('siteLogos');


    return {
        "title": "Site Logos",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteLogosContext": siteLogos
        }
    };
}

module.exports = new SiteLogos();