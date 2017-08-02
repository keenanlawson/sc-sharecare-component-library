import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            {/*Typography CSS, reset CSS, grid and visibility helper CSS classes*/}
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/AskMDLogo/AskMDLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/DailyStrengthLogo/DailyStrengthLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/DoctorOzLogo/DoctorOzLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/FacebookLogo/FacebookLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/GoogleLogo/GoogleLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/InstagramLogo/InstagramLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/LinkedInLogo/LinkedInLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/PinterestLogo/PinterestLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/SharecareLogo/SharecareLogo.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/logos/TwitterLogo/TwitterLogo.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;
