import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RecommendationChart from '../RecommendationChart/RecommendationChart.jsx';
import SimpleCard from '../../cards/SimpleCard/SimpleCard.jsx';

const RecommendationDetail = ({ className, title, bodyContent, chartData }) => {
    const chart = chartData
        ? <RecommendationChart className="m-assessment__recommendation-detail-chart" chartData={chartData}/>
        : null;
    return (
        <SimpleCard
            className={classNames("m-assessment__recommendation-detail", className)}
            title={title}
            text={chart}
            html={bodyContent}
        >
        </SimpleCard>
    );
};

RecommendationDetail.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    bodyContent: PropTypes.string,
    chartData: PropTypes.shape({
        chartType: PropTypes.oneOf(['bar', 'arc']),
        percentFull: PropTypes.number.isRequired,
        fillClassName: PropTypes.string,
        chartMarkers: PropTypes.arrayOf(PropTypes.shape({
            percent: PropTypes.number.isRequired,
            text: PropTypes.string
        })),
        headerContent: PropTypes.string,
        footerContent: PropTypes.string
    })
};

RecommendationDetail.defaultProps = {};

// export default RecommendationDetail;
module.exports = RecommendationDetail;
