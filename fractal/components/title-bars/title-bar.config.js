const TitleBarContext = require('./title-bar.context');

function TitleBar() {
    const titleBar = new TitleBarContext();
    titleBar.text = 'Lorem Ipsum';

    return {
        "title": "TitleBar",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "titleBarContext": titleBar
        }
    };
}

module.exports = new TitleBar();