const navigationConfig = require('../SiteNavigation/SiteNavigation.config');

module.exports = {
    "title": "Site Navigation Bar",
    "label": "Site Navigation Bar",
    "order": 6,
    "status": "ready",
    "collated": true,
    "preview": "@site-navigation-bar-preview",
    "context": {
        tabs: navigationConfig.context.tabs
    }
};
