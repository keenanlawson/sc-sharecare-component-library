module.exports = {
    "title": "Radio Input",
    "status": "ready",
    "collated": true,
    "preview": "@radio-input-preview",
    "context": {
        "checked": true,
        "disabled": false,
        "name": "radioNameA",
        "value": "radioValue",
        "label": "Radio Label"
    },
    "variants": [
        {"name": "radio-input-unchecked-not-disabled", "context": {
            "checked": false,
            "disabled": false,
            "name": "radioNameA"
        }},
        {"name": "radio-input-checked-disabled", "context": {
            "checked": true,
            "disabled": true,
            "name": "radioNameB"
        }},
        {"name": "radio-input-unchecked-disabled", "context": {
            "checked": false,
            "disabled": true,
            "name": "radioNameB"
        }},
        {"name": "radio-input-checked-error", "context": {
            "checked": true,
            "error": true,
            "name": "radioNameC"
        }},
        {"name": "radio-input-unchecked-error", "context": {
            "checked": false,
            "error": true,
            "name": "radioNameC"
        }},
        {"name": "radio-input-unchecked-error-disabled", "context": {
            "checked": false,
            "disabled": true,
            "error": true,
            "name": "radioNameC"
        }}
    ]
};