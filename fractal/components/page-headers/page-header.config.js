const ComponentFactory = require('../ComponentFactory');

function PageHeader() {

    // Create Site Navigation State
    const primaryNavigationLinkContentClasses = ['m-page-header__navigation-link'];
    const primaryNavigationTabClasses = ['m-page-header_primary-navigation-tab'];
    const breadcrumbLinkClasses = ['m-page-header__breadcrumb-link'];
    const pageHeader = ComponentFactory.createComponent('pageHeader', {
        sections: {
            siteSearchBar: {
                pageSection: {},
                siteSearchBar: {}
            },
            siteNavigationBar: {
                pageSection: ComponentFactory.createComponent('pageSection'),
                siteNavigationBar: '@site-navigation-bar.siteNavigationBarContext'
            },
            titleBar: {
                pageSection: ComponentFactory.createComponent('pageSection'),
                titleBar: ComponentFactory.createComponent('titleBar', {
                    text: 'Lorem Ipsum'
                })
            },
            primaryNavigation: {
                pageSection: ComponentFactory.createComponent('pageSection'),
                navigation: ComponentFactory.createComponent('navigation', {
                    isPrimary: true,
                    tabs: [
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: primaryNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            }),
                            classes: primaryNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: primaryNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            }),
                            classes: primaryNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: primaryNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            }),
                            classes: primaryNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: primaryNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            }),
                            classes: primaryNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: primaryNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            }),
                            classes: primaryNavigationTabClasses
                        })
                    ]
                })
            },
            breadcrumbBar: {
                pageSection: ComponentFactory.createComponent('pageSection'),
                breadcrumbBar: ComponentFactory.createComponent('breadcrumbBar', {
                    breadcrumbs: [
                        ComponentFactory.createComponent('breadcrumb', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: breadcrumbLinkClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            })
                        }),
                        ComponentFactory.createComponent('breadcrumb', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: breadcrumbLinkClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            })
                        }),
                        ComponentFactory.createComponent('breadcrumb', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Lorem Ipsum',
                                contentClasses: breadcrumbLinkClasses,
                                linkTo: 'https://www.sharecare.com/lorem-ipsum'
                            })
                        })
                    ]
                })
            }
        }
    });


    return {
        "title": "Page Header",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "pageHeaderContext": pageHeader
        }
    };
}

module.exports = new PageHeader();