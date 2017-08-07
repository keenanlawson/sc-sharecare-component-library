import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
    );
};

module.exports = page;
