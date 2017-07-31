import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationBar/NavigationBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationTab/NavigationTab.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteNavigationLinks/SiteNavigationLinks.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/buttons/Button/Button.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextInput/TextInput.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/searches/GlobalSearchForm/GlobalSearchForm.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/Drawer/Drawer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTrigger/DrawerTrigger.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerPane/DrawerPane.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTarget/DrawerTarget.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteDrawer/SiteDrawer.css`}/>

            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
