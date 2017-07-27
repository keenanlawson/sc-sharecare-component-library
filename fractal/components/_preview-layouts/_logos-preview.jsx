import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            {/*Typography CSS, reset CSS, grid and visibility helper CSS classes*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>

            {/*Common CSS*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>

            {/*Component HTML*/}
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
