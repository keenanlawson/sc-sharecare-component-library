const ComponentFactory = require('../ComponentFactory');

function SiteDisclaimer() {

    const siteDisclaimer = ComponentFactory.createComponent('siteDisclaimer');


    return {
        "title": "Site Disclaimer",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteDisclaimerContext": siteDisclaimer
        }
    };
}

module.exports = new SiteDisclaimer();