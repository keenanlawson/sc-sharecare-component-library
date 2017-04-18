/**
 * @returns {{modifiers: Array.<String>, classes: Array.<String>, navigationTabs: Array.<NavigationTab>}}
 */
module.exports = function NavigationContext() {
    return {
        modifiers: [],
        classes: [],
        navigationTabs: [],
        isPrimary: false,
        isSecondary: false
    };
};