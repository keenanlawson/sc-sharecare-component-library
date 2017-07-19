import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGArcChart/SVGArcChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGBarChart/SVGBarChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/Card/Card.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardHeader/CardHeader.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardText/CardText.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationDetail/RecommendationDetail.css`}/>
            <style>{"\
                .base-preview{\
                  margin: 5px;\
                }\
                .m-assessment__recommendation-detail{\
                  margin-top: 5px;\
                }\
                .m-assessment__recommendation-detail:first-child{\
                  margin-top: 0;\
                }\
              "}</style>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <script src={`http://localhost:3050/static/vendors/snap.svg-min.js`}/>
            <script src={`http://localhost:3050/static/js/RecommendationDetail.js`}/>
        </div>
    );
};

module.exports = page;