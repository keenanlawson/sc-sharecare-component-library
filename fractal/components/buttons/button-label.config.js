const ButtonLabelContext = require('./button-label.context');

function ButtonLabel() {
    const buttonLabel = new ButtonLabelContext();
    buttonLabel.label = 'Lorem Ipsum';
    buttonLabel.labelFor = 'some-input';

    return {
        "title": "Button Label",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "buttonLabelContext": buttonLabel
        }
    };
}

module.exports = new ButtonLabel();