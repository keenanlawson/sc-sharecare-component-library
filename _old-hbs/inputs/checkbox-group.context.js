/**
 * @returns {{modifiers: Array, classes: Array, labelModifiers: Array, groupModifiers: Array, groupClasses: Array, groupLabelFor: string, groupLabel: string, checkboxes: Array}}
 */
module.exports = function CheckboxGroupContext() {
    return {
        modifiers: [],
        classes: [],
        labelModifiers: [],
        groupModifiers: [],
        groupClasses: [],
        groupLabelFor: '',
        groupLabel: '',
        checkboxes: []
    };
};