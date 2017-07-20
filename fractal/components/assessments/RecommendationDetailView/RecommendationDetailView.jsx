import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BreadcrumbBar from '../../breadcrumbs/BreadcrumbBar/BreadcrumbBar.jsx';
import RecommendationNavigation from '../RecommendationNavigation/RecommendationNavigation.jsx';
import RecommendationDetailGroup from '../RecommendationDetailGroup/RecommendationDetailGroup.jsx';
import AssessmentScore from '../AssessmentScore/AssessmentScore.jsx';
import RecommendationTOC from '../RecommendationTOC/RecommendationTOC.jsx';

const RecommendationDetailView = ({ className, navigation, score, tableOfContents, details, breadcrumbs }) => {
    return (
        <div className={classNames('m-assessment__recommendation-detail-view', className)}>
            <BreadcrumbBar breadcrumbs={breadcrumbs}/>
            <div className="m-assessment__recommendation-detail-view-main">
                <div className="m-assessment__recommendation-detail-view-content">
                    <RecommendationNavigation {...navigation} className="m-assessment__recommendation-detail-view-header-navigation" />
                    <RecommendationDetailGroup {...details} />
                    <RecommendationNavigation dock {...navigation} className="m-assessment__recommendation-detail-view-footer-navigation" />
                </div>
                <div className="m-assessment__recommendation-detail-view-aside">
                    <AssessmentScore {...score} />
                    <RecommendationTOC {...tableOfContents} />
                </div>
            </div>
        </div>
    );
};

RecommendationDetailView.propTypes = {
    className: PropTypes.string,
    navigation: PropTypes.object,
    score: PropTypes.object,
    tableOfContents: PropTypes.object,
    details: PropTypes.object,
    breadcrumbs: PropTypes.object
};

RecommendationDetailView.defaultProps = {};

// export default RecommendationDetailView;
module.exports = RecommendationDetailView;
