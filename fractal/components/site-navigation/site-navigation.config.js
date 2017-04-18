const ComponentFactory = require('../ComponentFactory');

function SiteNavigation() {
    const siteNavigationLinkLabelClasses = ['c-site-navigation__navigation-label'];
    const siteNavigationTabClasses = ['c-site-navigation__navigation-tab'];

    const siteNavigation = ComponentFactory.createComponent('siteNavigation', {
        navigation: ComponentFactory.createComponent('navigation', {
            navigationTabs: [
                ComponentFactory.createComponent('navigationTab', {
                    link: ComponentFactory.createComponent('link', {
                        label: 'Find a Doctor',
                        labelClasses: siteNavigationLinkLabelClasses,
                        linkTo: 'https://www.sharecare.com/find-a-doctor'
                    }),
                    classes: siteNavigationTabClasses,
                    isSelected: true
                }),
                ComponentFactory.createComponent('navigationTab', {
                    link: ComponentFactory.createComponent('link', {
                        label: 'Health Experts',
                        labelClasses: siteNavigationLinkLabelClasses,
                        linkTo: 'https://www.sharecare.com/experts'
                    }),
                    classes: siteNavigationTabClasses
                }),
                ComponentFactory.createComponent('navigationTab', {
                    link: ComponentFactory.createComponent('link', {
                        label: 'Topics',
                        labelClasses: siteNavigationLinkLabelClasses,
                        linkTo: 'https://www.sharecare.com/topics'
                    }),
                    classes: siteNavigationTabClasses
                }),
                ComponentFactory.createComponent('navigationTab', {
                    link: ComponentFactory.createComponent('link', {
                        label: 'Video',
                        labelClasses: siteNavigationLinkLabelClasses,
                        linkTo: 'https://www.sharecare.com/video'
                    }),
                    classes: siteNavigationTabClasses
                }),
                ComponentFactory.createComponent('navigationTab', {
                    link: ComponentFactory.createComponent('link', {
                        label: 'Health Tools',
                        labelClasses: siteNavigationLinkLabelClasses,
                        linkTo: 'https://www.sharecare.com/health-tools'
                    }),
                    classes: siteNavigationTabClasses
                })
            ]
        })
    });


    return {
        "title": "Site Navigation",
        "status": "ready",
        "collated": false,
        "preview": "@grid-layout-preview",
        "context": {
            "siteNavigationContext": siteNavigation
        }
    };
}

module.exports = new SiteNavigation();