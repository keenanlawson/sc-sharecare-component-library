const ComponentFactory = require('../ComponentFactory');

function SiteSearchBar() {

    const siteSearchBar = ComponentFactory.createComponent('siteSearchBar');

    return {
        "title": "Site Search Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteSearchBarContext": siteSearchBar
        }
    };
}

module.exports = new SiteSearchBar();