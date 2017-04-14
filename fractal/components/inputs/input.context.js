/**
 * @returns {{modifiers: Array, classes: Array, labelModifiers: Array, labelClasses: Array, isDisabled: boolean, id: string, label: string, type: string, name: string, value: string, placeholder: string, title: string}}
 */
module.exports = function InputContext() {
    return {
        modifiers: [],
        classes: [],
        labelModifiers: [],
        labelClasses: [],
        isDisabled: false,
        id: '',
        label: '',
        type: '',
        name: '',
        value: '',
        placeholder: '',
        title: ''
    };
};