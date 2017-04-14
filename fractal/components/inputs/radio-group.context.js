/**
 * @returns {{modifiers: Array, classes: Array, labelModifiers: Array, groupModifiers: Array, groupClasses: Array, groupLabelFor: string, groupLabel: string, radios: Array}}
 */
module.exports = function RadioGroupContext() {
    return {
        modifiers: [],
        classes: [],
        labelModifiers: [],
        groupModifiers: [],
        groupClasses: [],
        groupLabelFor: '',
        groupLabel: '',
        radios: []
    };
};