/**
 * @returns {{modifiers: Array, classes: Array, name: string, label: string, isExpanded: boolean, items: Array.<AccordionItem>}}
 */
module.exports = function AccordionContext() {
    return {
        modifiers: [],
        classes: [],
        name: '',
        label: '',
        isExpanded: false,
        items: []
    };
};