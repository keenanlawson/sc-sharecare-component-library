import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextInput/TextInput.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextGroup/TextGroup.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/inputs/TextInputsGroup/TextInputsGroup.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;