const ComponentFactory = require('../ComponentFactory');

function SocialIcons() {

    const socialIcons = ComponentFactory.createComponent('socialIcons');


    return {
        "title": "Social Icons",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "socialIconsContext": socialIcons
        }
    };
}

module.exports = new SocialIcons();