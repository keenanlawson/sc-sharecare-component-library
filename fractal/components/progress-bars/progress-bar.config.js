const ProgressBarContext = require('./progress-bar.context');

function ProgressBar() {
    const progressBar = new ProgressBarContext();
    progressBar.header = 'Lorem Ipsum';
    progressBar.percent = 33;

    return {
        "title": "Progress Bar",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "progressBarContext": progressBar
        }
    };
}

module.exports = new ProgressBar();