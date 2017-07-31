const CheckboxContext = require('./checkbox.context');

function Checkbox() {
    const checkbox = new CheckboxContext();
    checkbox.label = 'Lorem Ipsum';
    checkbox.id = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.value = 'valueA';
    checkbox.isChecked = true;

    return {
        "title": "Checkbox",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "checkboxContext": checkbox
        }
    };
}

module.exports = new Checkbox();