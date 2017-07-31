/**
 * @returns {{modifiers: Array, classes: Array, name: string, label: string, fontIcon: FontIcon|null}}
 */
module.exports = function BannerContext() {
    return {
        modifiers: [],
        classes: [],
        name: '',
        label: '',
        fontIcon: null
    };
};