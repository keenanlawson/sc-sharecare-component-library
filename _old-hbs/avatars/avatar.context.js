/**
 * @returns {{modifiers: Array, classes: Array, image: Image|null, fontIcon: FontIcon|null}}
 */
module.exports = function AvatarContext() {
    return {
        modifiers: [],
        classes: [],
        title: '',
        image: null,
        fontIcon: null
    };
};