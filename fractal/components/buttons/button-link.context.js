/**
 * @returns {{modifiers: Array, classes: Array, label: string, title: string, target: string, linkTo: string, badge: Badge|null, leftFontIcon: FontIcon|null, rightFontIcon: FontIcon|null}}
 */
module.exports = function ButtonLinkContext() {
    return {
        modifiers: [],
        classes: [],
        label: '',
        title: '',
        target: '',
        linkTo: '',
        badge: null,
        leftFontIcon: null,
        rightFontIcon: null
    };
};