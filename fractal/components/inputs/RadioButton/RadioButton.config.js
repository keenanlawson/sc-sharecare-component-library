module.exports = {
    "title": "Radio Button",
    "status": "ready",
    "collated": true,
    "preview": "@radio-button-preview",
    "context": {
        "checked": true
    },
    "variants": [
        {"name": "radio-button-unchecked", "context": {
            "checked": false
        }},
        {"name": "radio-button-checked-disabled", "context": {
            "checked": true,
            "disabled": true
        }},
        {"name": "radio-button-unchecked-disabled", "context": {
            "checked": false,
            "disabled": true
        }},
        {"name": "radio-button-checked-with-error", "context": {
            "error": true
        }},
        {"name": "radio-button-unchecked-with-error", "context": {
            "checked": false,
            "error": true
        }},
        {"name": "radio-button-disabled-with-error", "context": {
            "checked": false,
            "disabled": true,
            "error": true
        }}
    ]
};