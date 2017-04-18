const ComponentFactory = require('../ComponentFactory');

function Navigation() {

    const navigation = ComponentFactory.createComponent('navigation', {
        navigationTabs: [
            ComponentFactory.createComponent('navigationTab', {
                link: ComponentFactory.createComponent('link', {
                    label: 'Lorem Ipsum',
                    linkTo: 'https://www.sharecare.com'
                }),
                isSelected: true
            }),
            ComponentFactory.createComponent('navigationTab', {
                link: ComponentFactory.createComponent('link', {
                    label: 'Lorem Ipsum',
                    linkTo: 'https://www.sharecare.com'
                })
            }),
            ComponentFactory.createComponent('navigationTab', {
                link: ComponentFactory.createComponent('link', {
                    label: 'Lorem Ipsum',
                    linkTo: 'https://www.sharecare.com'
                })
            })
        ]
    });

    return {
        "title": "Navigation",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "navigationContext": navigation
        }
    };
}

module.exports = new Navigation();