module.exports = {
    "title": "Radio Buttons Group",
    "status": "ready",
    "collated": true,
    "preview": "@radio-buttons-group-preview",
    "context": {
        "name": "radioButtonsName",
        "label": "Radio Group Test Text",
        "labelsAndValues": [
            {label: 'Radio Button Label A', value: 'radioButtonLabelA', checked: true},
            {label: 'Radio Button Label B', value: 'radioButtonLabelB'},
            {label: 'Radio Button Label C', value: 'radioButtonLabelC'},
            {label: 'Radio Button Label D', value: 'radioButtonLabelD', disabled: true}
        ]
    },
    "variants": [
        {"name": "radio-buttons-group-error", "context": {
            "error": "Error Test Text"
        }},
        {"name": "radio-buttons-group-required", "context": {
            "required": true
        }}
    ]
};
