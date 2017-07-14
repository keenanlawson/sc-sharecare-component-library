import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGArcChart/SVGArcChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGBarChart/SVGBarChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/Card/Card.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/loading-spinners/LoadingSpinner/LoadingSpinner.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationSummary/RecommendationSummary.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationSummaryGroup/RecommendationSummaryGroup.css`}/>
            <style>{"\
                .base-preview{\
                  margin: 5px;\
                }\
              "}</style>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            {/*<script src={`http://localhost:3050/static/vendors/snap.svg-min.js`}/>*/}
            <script src={`http://localhost:3050/static/js/RecommendationSummaryGroup.js`}/>
        </div>
    );
};

module.exports = page;