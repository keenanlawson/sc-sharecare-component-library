import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>

            {/*Common*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>

            {/*Bar*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/page-sections/SiteDisclaimerLinks/SiteDisclaimerLinks.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;