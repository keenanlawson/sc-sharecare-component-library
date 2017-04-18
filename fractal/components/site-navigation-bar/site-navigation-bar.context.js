/**
 * @returns {{modifiers: Array, classes: Array, siteNavigation: null|SiteNavigation}}
 */
module.exports = function SiteNavigationBarContext() {
    return {
        modifiers: [],
        classes: [],
        drawer: null,
        siteNavigation: null,
        globalSearch: null
    };
};