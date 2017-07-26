import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/LayerContainer/LayerContainer.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/containers/PageLayer/PageLayer.css`}/>

            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/buttons/Button/Button.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextInput/TextInput.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/searches/GlobalSearchForm/GlobalSearchForm.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/searches/SiteSearchBar/SiteSearchBar.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
