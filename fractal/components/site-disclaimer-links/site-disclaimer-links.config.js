const ComponentFactory = require('../ComponentFactory');

function SiteDisclaimerLinks() {

    const siteDisclaimerLinks = ComponentFactory.createComponent('siteDisclaimerLinks');


    return {
        "title": "Site Disclaimer Links",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteDisclaimerLinksContext": siteDisclaimerLinks
        }
    };
}

module.exports = new SiteDisclaimerLinks();