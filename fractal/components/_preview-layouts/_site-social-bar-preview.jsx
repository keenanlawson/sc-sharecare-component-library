import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>

            {/*Page Layer and container*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/LayerContainer/LayerContainer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/PageLayer/PageLayer.css`}/>

            {/*Social Bar components*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/social-logos/SocialLogos/SocialLogos.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/site-social-bar/SiteSocialBar/SiteSocialBar.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;