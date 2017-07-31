const navigationConfig = require('../NavigationBar/NavigationBar.config');

module.exports = {
    "title": "Primary Navigation Bar",
    "label": "Primary Navigation Bar",
    "order": 3,
    "status": "ready",
    "collated": true,
    "preview": "@navigation-bar-preview",
    "context": {
        tabs: navigationConfig.context.tabs
    }
};