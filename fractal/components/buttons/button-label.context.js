/**
 * @returns {{modifiers: Array, classes: Array, labelFor: string, label: string, title: string, badge: Badge|null, leftFontIcon: FontIcon|null, rightFontIcon: FontIcon|null}}
 */
module.exports = function ButtonLabelContext() {
    return {
        modifiers: [],
        classes: [],
        labelFor: '',
        label: '',
        title: '',
        badge: null,
        leftFontIcon: null,
        rightFontIcon: null
    };
};