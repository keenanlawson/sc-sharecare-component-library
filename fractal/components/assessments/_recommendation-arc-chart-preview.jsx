import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGArcChart/SVGArcChart.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <script src={`http://localhost:3050/static/vendors/snap.svg-min.js`}/>
            <script src={`http://localhost:3050/static/js/RecommendationChart.js`}/>
        </div>
    );
};

module.exports = page;