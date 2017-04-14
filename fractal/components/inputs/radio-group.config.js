const RadioGroupContext = require('./radio-group.context');
const RadioContext = require('./radio.context');

function RadioGroup() {
    const radio1 = new RadioContext();
    radio1.label = 'Lorem Ipsum';
    radio1.id = 'radio1';
    radio1.name = 'radio';
    radio1.value = 'valueA';

    const radio2 = new RadioContext();
    radio2.label = 'Lorem Ipsum';
    radio2.id = 'radio2';
    radio2.name = 'radio';
    radio2.value = 'valueB';
    radio2.isChecked = true;

    const radio3 = new RadioContext();
    radio3.label = 'Lorem Ipsum';
    radio3.id = 'radio3';
    radio3.name = 'radio';
    radio3.value = 'valueC';
    radio3.isDisabled = true;

    const radio4 = new RadioContext();
    radio4.label = 'Lorem Ipsum';
    radio4.id = 'radio4';
    radio4.name = 'radio';
    radio4.value = 'valueD';
    radio4.isChecked = true;
    radio4.isDisabled = true;

    const radioGroup = new RadioGroupContext();
    radioGroup.groupLabel = 'Lorem Ipsum';
    radioGroup.groupLabelFor = 'radio1';
    radioGroup.radios = radioGroup.radios.concat([
        radio1,
        radio2,
        radio3,
        radio4
    ]);

    return {
        "title": "Radio Group",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "radioGroupContext": radioGroup
        }
    };
}

module.exports = new RadioGroup();