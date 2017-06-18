module.exports = {
    "title": "Currency Input",
    "status": "ready",
    "collated": true,
    "preview": "@currency-input-preview",
    "context": {
        "name": "currencyNameA",
        "label": "Currency Label"
    },
    "variants": [
        {"name": "currency-input-disabled", "context": {
            "disabled": true
        }},
        {"name": "currency-input-required", "context": {
            "required": true
        }},
        {"name": "currency-input-inline", "context": {
            "inline": true
        }},
        {"name": "currency-input-boolean-error", "context": {
            "error": true
        }},
        {"name": "currency-input-string-error", "context": {
            "error": "Currency Error"
        }},
        {"name": "currency-input-inline-error", "context": {
            "inline": true,
            "error": "Currency Error"
        }},
        {"name": "currency-input-placeholder", "context": {
            "placeholder": "Sample placeholder currency"
        }},
        {"name": "currency-input-with-value", "context": {
            "value": "Sample value currency",
        }},
        {"name": "currency-input-no-label", "context": {
            "label": "",
            "value": "Sample without label"
        }},
        {"name": "currency-input-error-disabled", "context": {
            "disabled": true,
            "error": true
        }}
    ]
};