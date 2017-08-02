import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGArcChart/SVGArcChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGBarChart/SVGBarChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/charts/SVGLineChart/SVGLineChart.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/icons/SVGIcon/SVGIcon.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/stickies/StickyBar/StickyBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/Card/Card.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardHeader/CardHeader.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardMedia/CardMedia.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardText/CardText.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/breadcrumbs/Breadcrumb/Breadcrumb.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/breadcrumbs/BreadcrumbBar/BreadcrumbBar.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/AssessmentScore/AssessmentScore.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationNavigation/RecommendationNavigation.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationTOC/RecommendationTOC.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationDetail/RecommendationDetail.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationDetailGroup/RecommendationDetailGroup.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/assessments/RecommendationDetailView/RecommendationDetailView.css`}/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <script src={`http://localhost:3050/static/vendors/snap.svg-min.js`}/>
            <script src={`http://localhost:3050/static/js/RecommendationDetailView.js`}/>
        </div>
    );
};

module.exports = page;