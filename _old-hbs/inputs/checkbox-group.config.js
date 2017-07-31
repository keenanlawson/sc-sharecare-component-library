const CheckboxGroupContext = require('./checkbox-group.context');
const CheckboxContext = require('./checkbox.context');

function CheckboxGroup() {
    const checkbox1 = new CheckboxContext();
    checkbox1.label = 'Lorem Ipsum';
    checkbox1.id = 'checkbox1';
    checkbox1.name = 'checkbox';
    checkbox1.value = 'valueA';

    const checkbox2 = new CheckboxContext();
    checkbox2.label = 'Lorem Ipsum';
    checkbox2.id = 'checkbox2';
    checkbox2.name = 'checkbox';
    checkbox2.value = 'valueB';
    checkbox2.isChecked = true;

    const checkbox3 = new CheckboxContext();
    checkbox3.label = 'Lorem Ipsum';
    checkbox3.id = 'checkbox3';
    checkbox3.name = 'checkbox';
    checkbox3.value = 'valueC';
    checkbox3.isDisabled = true;

    const checkbox4 = new CheckboxContext();
    checkbox4.label = 'Lorem Ipsum';
    checkbox4.id = 'checkbox4';
    checkbox4.name = 'checkbox';
    checkbox4.value = 'valueD';
    checkbox4.isChecked = true;
    checkbox4.isDisabled = true;

    const checkboxGroup = new CheckboxGroupContext();
    checkboxGroup.groupLabel = 'Lorem Ipsum';
    checkboxGroup.groupLabelFor = 'checkbox1';
    checkboxGroup.checkboxes = checkboxGroup.checkboxes.concat([
        checkbox1,
        checkbox2,
        checkbox3,
        checkbox4
    ]);

    return {
        "title": "Checkbox Group",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "checkboxGroupContext": checkboxGroup
        }
    };
}

module.exports = new CheckboxGroup();