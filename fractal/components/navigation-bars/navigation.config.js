const NavigationContext = require('./navigation.context');
const NavigationTabContext = require('./navigation-tab.context');
const LinkContext = require('../links/link.context');

function Navigation() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const navigationTab1 = new NavigationTabContext();
    navigationTab1.link = link;
    const navigationTab2 = new NavigationTabContext();
    navigationTab2.link = link;
    const navigationTab3 = new NavigationTabContext();
    navigationTab3.link = link;

    const navigation = new NavigationContext();
    navigation.tabs = navigation.tabs.concat([
        navigationTab1,
        navigationTab2,
        navigationTab3
    ]);

    return {
        "title": "Navigation",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "navigationContext": navigation
        }
    };
}

module.exports = new Navigation();