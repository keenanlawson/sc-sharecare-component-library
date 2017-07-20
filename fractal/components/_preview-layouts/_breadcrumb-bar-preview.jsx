import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/breadcrumbs/Breadcrumb/Breadcrumb.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/breadcrumbs/BreadcrumbBar/BreadcrumbBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;