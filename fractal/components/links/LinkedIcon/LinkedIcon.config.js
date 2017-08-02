module.exports = {
    "title": "Linked Icon",
    "label": "Linked Icon",
    "status": "ready",
    "collated": false,
    "preview": "@linked-icon-preview",
    "context": {
        className: 'test-linked-icon-class',
        labelClass: 'test-linked-icon-label-class',
        iconClass: 'test-linked-icon-icon-class',
        to: 'http://www.test-linked-logo.com',
        label: 'sharecare',
        icon: 'sharecare-logo-color'
    },
    "variants": [
        {"name": "linked-icon-label-only", "context": {
            labelOnly: true,
            iconOnly: false
        }},
        {"name": "linked-icon-both", "context": {
            labelOnly: true
        }},
        {"name": "linked-icon-neither", "context": {
            labelOnly: false,
            iconOnly: false
        }}
    ]
};
