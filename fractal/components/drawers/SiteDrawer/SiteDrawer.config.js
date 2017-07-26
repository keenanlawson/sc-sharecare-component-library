const navigationConfig = require('../../navigation-bars/SiteNavigation/SiteNavigation.config');

module.exports = {
    "title": "Site Drawer",
    "label": "Site Drawer",
    "status": "ready",
    "collated": true,
    "preview": "@drawer-preview",
    "context": {
        links: navigationConfig.context.tabs,
        visible: true
    }
};
