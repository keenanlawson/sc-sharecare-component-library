module.exports = {
    "title": "Text Input",
    "status": "ready",
    "collated": true,
    "preview": "@text-input-preview",
    "context": {
        "name": "textNameA",
        "label": "Text Label"
    },
    "variants": [
        {"name": "text-input-disabled", "context": {
            "disabled": true
        }},
        {"name": "text-input-required", "context": {
            "required": true
        }},
        {"name": "text-input-error", "context": {
            "error": true
        }},
        {"name": "text-input-error", "context": {
            "error": "Text Error"
        }},
        {"name": "text-input-placeholder", "context": {
            "placeholder": "Sample placeholder text"
        }},
        {"name": "text-input-with-value", "context": {
            "value": "Sample value text",
        }},
        {"name": "text-input-no-label", "context": {
            "label": "",
            "value": "Sample without label"
        }},
        {"name": "text-input-error-disabled", "context": {
            "disabled": true,
            "error": true
        }}
    ]
};