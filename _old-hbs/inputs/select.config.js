const SelectContext = require('./select.context');
const SelectOptionContext = require('./select-option.context');

function Select() {
    const selectOption1 = new SelectOptionContext();
    selectOption1.label = 'Lorem Ipsum A';
    selectOption1.value = 'valueA';
    const selectOption2 = new SelectOptionContext();
    selectOption2.label = 'Lorem Ipsum B';
    selectOption2.value = 'valueB';
    selectOption2.isSelected = true;
    const selectOption3 = new SelectOptionContext();
    selectOption3.label = 'Lorem Ipsum C';
    selectOption3.value = 'valueC';
    selectOption3.isDisabled = true;

    const select = new SelectContext();
    select.label = 'Lorem Ipsum';
    select.id = 'select';
    select.name = 'select';
    select.options = select.options.concat([
        selectOption1,
        selectOption2,
        selectOption3
    ]);

    return {
        "title": "Select",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "selectContext": select
        }
    };
}

module.exports = new Select();