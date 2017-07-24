import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/Drawer/Drawer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTrigger/DrawerTrigger.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerTarget/DrawerTarget.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/DrawerPane/DrawerPane.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/drawers/SiteDrawer/SiteDrawer.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
