/**
 * @returns {{value: string, label: string, isDisabled: boolean, isSelected: boolean}}
 */
module.exports = function SelectOptionContext() {
    return {
        value: '',
        label: '',
        isDisabled: false,
        isSelected: false
    };
};