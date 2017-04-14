/**
 * @returns {{modifiers: Array, classes: Array, label: string, fontIcon: FontIcon|null}}
 */
module.exports = function BadgeContext() {
    return {
        modifiers: [],
        classes: [],
        label: '',
        fontIcon: null
    };
};