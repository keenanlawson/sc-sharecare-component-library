/**
 * @returns {{modifiers: Array, classes: Array, title: string, subtitle: string, titleLink: Link|null, avatar: Avatar|null, fontIcon: FontIcon|null}}
 */
module.exports = function CardHeaderContext() {
    return {
        modifiers: [],
        classes: [],
        title: '',
        subtitle: '',
        titleLink: null,
        avatar: null,
        fontIcon: null
    };
};