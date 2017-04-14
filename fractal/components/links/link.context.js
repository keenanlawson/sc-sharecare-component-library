/**
 * @returns {{modifiers: Array, classes: Array, contentModifiers: Array, contentClasses: Array, labelModifiers: Array, labelClasses: Array, linkTo: string, label: string, badge: null, fontIcon: null}}
 */
module.exports = function LinkContext() {
    return {
        modifiers: [],
        classes: [],
        contentModifiers: [],
        contentClasses: [],
        labelModifiers: [],
        labelClasses: [],
        linkTo: '',
        label: '',
        badge: null,
        fontIcon: null
    };
};