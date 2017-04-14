const NavigationTabContext = require('./navigation-tab.context');
const LinkContext = require('../links/link.context');

function NavigationTab() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const navigationTab = new NavigationTabContext();
    navigationTab.link = link;

    return {
        "title": "NavigationTab",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "navigationTabContext": navigationTab
        }
    };
}

module.exports = new NavigationTab();