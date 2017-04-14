/**
 * @returns {{modifiers: Array, classes: Array, textBody: string, fontIcon: FontIcon|null}}
 */
module.exports = function CardTextContext() {
    return {
        modifiers: [],
        classes: [],
        textBody: '',
        fontIcon: null
    };
};