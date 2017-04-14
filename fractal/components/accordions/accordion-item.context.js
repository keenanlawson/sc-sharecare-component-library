/**
 * @returns {{modifiers: Array, classes: Array, link: Link|null, label: string}}
 */
module.exports = function AccordionItemContext() {
    return {
        modifiers: [],
        classes: [],
        link: null,
        label: '',
        isSelected: false
    };
};