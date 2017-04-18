const ComponentFactory = require('../ComponentFactory');

function SiteNavigationBar() {

    const siteNavigationBar = ComponentFactory.createComponent('siteNavigationBar', {
        siteNavigation: '@site-navigation.siteNavigationContext'
    });


    return {
        "title": "Site Navigation Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteNavigationBarContext": siteNavigationBar
        }
    };
}

module.exports = new SiteNavigationBar();