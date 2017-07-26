import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/LayerContainer/LayerContainer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/PageLayer/PageLayer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/site-logos/SiteLogo/SiteLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation-bars/NavigationBar/NavigationBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation-bars/NavigationTab/NavigationTab.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation-bars/SiteNavigation/SiteNavigation.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/buttons/Button/Button.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextInput/TextInput.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/searches/GlobalSearchForm/GlobalSearchForm.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/Drawer/Drawer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTrigger/DrawerTrigger.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerPane/DrawerPane.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTarget/DrawerTarget.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/SiteDrawer/SiteDrawer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation-bars/SiteNavigationBar/SiteNavigationBar.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
