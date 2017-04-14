/**
 * @returns {{modifiers: Array.<String>, classes: Array.<String>, link: Link|null, isSelected: boolean}}
 */
module.exports = function NavigationTabContext() {
    return {
        modifiers: [],
        classes: [],
        link: null,
        isSelected: false
    };
};