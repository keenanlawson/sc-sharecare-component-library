const ComponentFactory = require('../ComponentFactory');

function SVGIcon() {
    const svgIcon = ComponentFactory.createComponent('svgIcon', {
        svgIcon: 'sharecare-logo-color'
    });

    return {
        "title": "SVG Icon",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "svgIconContext": svgIcon
        }
    };
}

module.exports = new SVGIcon();