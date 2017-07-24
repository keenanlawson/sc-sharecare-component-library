const navigationConfig = require('../NavigationBar/NavigationBar.config');

module.exports = {
    "title": "Site Navigation",
    "label": "Site Navigation",
    "order": 5,
    "status": "ready",
    "collated": true,
    "preview": "@site-navigation-preview",
    "context": {
        tabs: navigationConfig.context.tabs
    }
};