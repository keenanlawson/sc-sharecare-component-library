import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/light-sea-green/light-sea-green.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/style-guide.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;