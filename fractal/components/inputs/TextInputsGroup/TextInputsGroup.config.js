module.exports = {
    "title": "Text Inputs Group",
    "status": "ready",
    "collated": true,
    "preview": "@text-inputs-group-preview",
    "context": {
        "label": "Text Inputs Group Test Text",
        "labelsAndValues": [
            {label: 'Text Input Label A', value: 'textInputValueA', name: 'textInputA'},
            {label: 'Text Input Label B', value: 'textInputValueB', name: 'textInputB', error: 'Custom Error'},
            {label: 'Text Input Label C', value: 'textInputValueC', name: 'textInputC', type: 'currency'},
            {label: 'Text Input Label D', value: 'textInputValueD', name: 'textInputD', disabled: true}
        ]
    },
    "variants": [
        {"name": "text-inputs-group-error", "context": {
            "error": "Error Test Text"
        }},
        {"name": "text-inputs-group-individual-errors", "context": {
            "groupError": false
        }},
        {"name": "text-inputs-group-required", "context": {
            "required": true
        }}
    ]
};
