/**
 * @returns {{modifiers: Array, classes: Array, labelModifiers: Array, labelClasses: Array, isDisabled: boolean, id: string, label: string, name: string, title: string, options: Array}}
 */
module.exports = function SelectContext() {
    return {
        modifiers: [],
        classes: [],
        labelModifiers: [],
        labelClasses: [],
        isDisabled: false,
        id: '',
        label: '',
        name: '',
        title: '',
        options: []
    };
};