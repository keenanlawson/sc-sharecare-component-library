const ModalContext = require('./modal.context');
const ButtonLabelContext = require('../buttons/button.context');

function Modal() {
    const button = new ButtonLabelContext();
    button.label = 'Lorem Ipsum';
    button.labelFor = 'modal';

    const modal = new ModalContext();
    modal.name = 'modal';
    modal.button = button;
    modal.isVisible = true;
    modal.isCancelable = true;

    return {
        "title": "Modal",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "modalContext": modal
        }
    };
}

module.exports = new Modal();