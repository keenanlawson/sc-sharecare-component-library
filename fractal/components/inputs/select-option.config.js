const SelectOptionContext = require('./select-option.context');

function SelectOption() {
    const selectOption = new SelectOptionContext();
    selectOption.label = 'Lorem Ipsum A';
    selectOption.value = 'valueA';

    return {
        "title": "SelectOption",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "selectOptionContext": selectOption
        }
    };
}

module.exports = new SelectOption();