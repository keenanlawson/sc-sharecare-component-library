import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
            {/*<link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/PageTemplate/PageTemplate.css`}/>*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/motifs/light-sea-green/light-sea-green-esi.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <script src={`http://localhost:3050/static/js/ComponentRenderer.js`}/>
        </div>
    );
};

module.exports = page;
