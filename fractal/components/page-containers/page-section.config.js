const PageSectionContext = require('./page-section.context');

function PageSection() {
    const pageSection = new PageSectionContext();

    return {
        "title": "Page Section",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "pageSectionContext": pageSection
        }
    };
}

module.exports = new PageSection();