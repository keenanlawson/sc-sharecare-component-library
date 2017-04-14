/**
 * @returns {{modifiers: Array, classes: Array, label: string, title: string, badge: Badge|null, leftFontIcon: FontIcon|null, rightFontIcon: FontIcon|null}}
 */
module.exports = function ButtonContext() {
    return {
        modifiers: [],
        classes: [],
        label: '',
        title: '',
        badge: null,
        leftFontIcon: null,
        rightFontIcon: null
    };
};