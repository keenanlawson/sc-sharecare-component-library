


class CSSRenderer {

    constructor() {

        this.css = {
            LayerContainer: {
                path: 'containers',
                contains: []
            },
            PageLayer: {
                path: 'containers',
                contains: ['LayerContainer']
            },
            SVGIcon: {
                path: 'icons',
                contains: []
            },
            Link: {
                path: 'links',
                contains: []
            },
            NavigationBar: {
                path: 'navigation',
                contains: ['NavigationTab', 'Link']
            },
            NavigationTab: {
                path: 'navigation',
                contains: []
            },
            PrimaryNavigationBar: {
                path: 'navigation',
                contains: ['NavigationBar', 'NavigationTab']
            },
            SecondaryNavigationBar: {
                path: 'navigation',
                contains: ['NavigationBar', 'NavigationTab']
            },
            Button: {
                path: 'buttons',
                contains: []
            },
            TextInput: {
                path: 'inputs',
                contains: []
            },
            Breadcrumb: {
                path: 'breadcrumbs',
                contains: []
            },
            BreadcrumbBar: {
                path: 'breadcrumbs',
                contains: ['Breadcrumb']
            },
            GlobalSearchForm: {
                path: 'searches',
                contains: ['SVGIcon', 'Button', 'TextInput']
            },
            Drawer: {
                path: 'drawers',
                contains: ['DrawerTrigger', 'DrawerPane', 'DrawerTarget']
            },
            DrawerTrigger: {
                path: 'drawers',
                contains: []
            },
            DrawerPane: {
                path: 'drawers',
                contains: []
            },
            DrawerTarget: {
                path: 'drawers',
                contains: []
            },
            SiteSearchBar: {
                path: 'page-sections',
                contains: ['PageLayer', 'GlobalSearchForm', 'Button']
            },
            SiteNavigationBar: {
                path: 'page-sections',
                contains: ['PageLayer', 'GlobalSearchForm', 'NavigationBar', 'SiteDrawer']
            },
            SiteDrawer: {
                path: 'page-sections',
                contains: ['Drawer', 'GlobalSearchForm', 'NavigationBar']
            },
            SiteHeader: {
                path: 'page-sections',
                contains: ['SiteSearchBar', 'SiteNavigationBar', 'NavigationBar']
            },
            SiteLogosBar: {
                path: 'page-sections',
                contains: ['PageLayer', 'SVGIcon', 'Link']
            },
            SiteAboutBar: {
                path: 'page-sections',
                contains: ['PageLayer', 'SVGIcon', 'Link']
            },
            SiteDisclaimerBar: {
                path: 'page-sections',
                contains: ['PageLayer', 'Link']
            },
            SiteFooter: {
                path: 'page-sections',
                contains: ['SiteLogosBar', 'SiteAboutBar', 'SiteDisclaimerBar']
            }
        };
    }

    getComponentCSS(component) {

        const cssPath = this.getPath(this.css[component]);

        // const css = this.css[component];

        // return css;
    }

    getPath(component) {
        return `/${this.css[component.path]}/${component}/${component}.css`;
    }
}

module.exports = CSSRenderer;
