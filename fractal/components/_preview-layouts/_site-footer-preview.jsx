import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/LayerContainer/LayerContainer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/PageLayer/PageLayer.css`}/>

            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationBar/NavigationBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationTab/NavigationTab.css`}/>

            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteLogosBar/SiteLogosBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteAboutBar/SiteAboutBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteDisclaimerBar/SiteDisclaimerBar.css`}/>

            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteFooter/SiteFooter.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
