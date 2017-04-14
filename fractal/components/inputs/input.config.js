const InputContext = require('./input.context');

function Input() {
    const input = new InputContext();
    input.id = 'input';
    input.label = 'Lorem Ipsum';
    input.name = 'input';
    input.placeholder = 'Lorem Ipsum';
    input.title = 'Lorem Ipsum';

    return {
        "title": "Input",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "inputContext": input
        }
    };
}

module.exports = new Input();