/**
 * @returns {{modifiers: Array.<String>, classes: Array.<String>, tabs: Array.<NavigationTab>}}
 */
module.exports = function NavigationContext() {
    return {
        modifiers: [],
        classes: [],
        tabs: [],
        isPrimary: false,
        isSecondary: false
    };
};