/**
 * @returns {{modifiers: Array, classes: Array, sections: {siteNavigation: {pageSection: null, navigation: null}, titleBar: {pageSection: null, titleBar: null}, primaryNavigation: {pageSection: null, navigation: null}, breadcrumbBar: {pageSection: null, breadcrumbBar: null}}}}
 */
module.exports = function PageHeaderContext() {
    return {
        modifiers: [],
        classes: [],
        sections: {
            searchBar: {pageSection: null},
            siteNavigation: {pageSection: null, navigation: null},
            titleBar: {pageSection: null, titleBar: null},
            primaryNavigation: {pageSection: null, navigation: null},
            breadcrumbBar: {pageSection: null, breadcrumbBar: null}
        }
    };
};