const GlobalSearchContext = require('./global-search.context');

function GlobalSearch() {

    const globalSearch = new GlobalSearchContext();

    return {
        "title": "Global Search",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "chipContext": globalSearch
        }
    };
}

module.exports = new GlobalSearch();