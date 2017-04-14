const ComponentFactory = require('../ComponentFactory');

function SiteDisclaimerBar() {

    const siteDisclaimerBar = ComponentFactory.createComponent('siteDisclaimerBar');


    return {
        "title": "Site Disclaimer Bar",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteDisclaimerBarContext": siteDisclaimerBar
        }
    };
}

module.exports = new SiteDisclaimerBar();