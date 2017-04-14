const RadioContext = require('./radio.context');

function Radio() {
    const radio = new RadioContext();
    radio.label = 'Lorem Ipsum';
    radio.id = 'radio';
    radio.name = 'radio';
    radio.value = 'valueA';
    radio.isChecked = true;

    return {
        "title": "Radio",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "radioContext": radio
        }
    };
}

module.exports = new Radio();