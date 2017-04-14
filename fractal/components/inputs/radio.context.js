/**
 * @returns {{modifiers: Array, classes: Array, label: string, id: string, name: string, value: string, title: string, isDisabled: boolean, isChecked: boolean}}
 */
module.exports = function RadioContext() {
    return {
        modifiers: [],
        classes: [],
        label: '',
        id: '',
        name: '',
        value: '',
        title: '',
        isDisabled: false,
        isChecked: false
    };
};