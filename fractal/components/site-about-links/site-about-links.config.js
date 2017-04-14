const ComponentFactory = require('../ComponentFactory');

function SiteAboutLinks() {

    const siteAboutLinks = ComponentFactory.createComponent('siteAboutLinks');


    return {
        "title": "Site About Links",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteAboutLinksContext": siteAboutLinks
        }
    };
}

module.exports = new SiteAboutLinks();