import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationTab/NavigationTab.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/NavigationBar/NavigationBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/PrimaryNavigationBar/PrimaryNavigationBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/navigation/SecondaryNavigationBar/SecondaryNavigationBar.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
