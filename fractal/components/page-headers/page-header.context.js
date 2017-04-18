/**
 * @returns {{modifiers: Array, classes: Array, sections: {siteSearchBar: {pageSection: null, siteSearchBar: null}, siteNavigationBar: {pageSection: null, siteNavigationBar: null}, titleBar: {pageSection: null, titleBar: null}, primaryNavigation: {pageSection: null, navigation: null}, breadcrumbBar: {pageSection: null, breadcrumbBar: null}}}}
 */
module.exports = function PageHeaderContext() {
    return {
        modifiers: [],
        classes: [],
        sections: {
            siteSearchBar: {pageSection: null, siteSearchBar: null},
            siteNavigationBar: {pageSection: null, siteNavigationBar: null},
            titleBar: {pageSection: null, titleBar: null},
            primaryNavigation: {pageSection: null, navigation: null},
            breadcrumbBar: {pageSection: null, breadcrumbBar: null}
        }
    };
};