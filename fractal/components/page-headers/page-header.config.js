const ComponentFactory = require('../ComponentFactory');

function PageHeader() {

    // Create Site Navigation State
    const siteNavigationLinkContentClasses = ['m-page-header__navigation-link', 'm-page-header__site-navigation-link'];
    const siteNavigationTabClasses = ['m-page-header__site-navigation-tab'];
    const primaryNavigationLinkContentClasses = ['m-page-header__navigation-link'];
    const primaryNavigationTabClasses = ['m-page-header_primary-navigation-tab'];
    const breadcrumbLinkClasses = ['m-page-header__breadcrumb-link'];
    const pageHeader = ComponentFactory.createComponent('pageHeader', {
        sections: {
            // The Header Search / Join-Login section does not have a 'state' so its components are explicitly added
            // searchBar: {pageSection: searchBarSection},
            siteNavigation: {
                pageSection: ComponentFactory.createComponent('pageSection'),
                navigation: ComponentFactory.createComponent('navigation', {
                    tabs: [
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Find a Doctor',
                                contentClasses: siteNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/find-a-doctor'
                            }),
                            classes: siteNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Health Experts',
                                contentClasses: siteNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/experts'
                            }),
                            classes: siteNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Topics',
                                contentClasses: siteNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/topics'
                            }),
                            classes: siteNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Video',
                                contentClasses: siteNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/video'
                            }),
                            classes: siteNavigationTabClasses
                        }),
                        ComponentFactory.createComponent('navigationTab', {
                            link: ComponentFactory.createComponent('link', {
                                label: 'Health Tools',
                                contentClasses: siteNavigationLinkContentClasses,
                                linkTo: 'https://www.sharecare.com/health-tools'
                            }),
                            classes: siteNavigationTabClasses
                        })
                    ]
                })
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