const navigationConfig = require('../NavigationBar/NavigationBar.config');

module.exports = {
    "title": "Secondary Navigation Bar",
    "label": "Secondary Navigation Bar",
    "order": 4,
    "status": "ready",
    "collated": true,
    "preview": "@secondary-navigation-bar-preview",
    "context": {
        tabs: navigationConfig.context.tabs
    }
};