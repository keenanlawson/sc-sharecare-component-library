const ComponentFactory = require('../ComponentFactory');

function PageFooter() {

    const pageFooter = ComponentFactory.createComponent('pageFooter');


    return {
        "title": "Page Footer",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "pageFooterContext": pageFooter
        }
    };
}

module.exports = new PageFooter();