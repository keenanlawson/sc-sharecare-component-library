import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SVGBarChart from '../../charts/SVGBarChart/SVGBarChart.jsx';
import SVGArcChart from '../../charts/SVGArcChart/SVGArcChart.jsx';

const RecommendationChart = ({ className, chartData, ...rest }) => {
    const componentClass = 'm-assessment__recommendation-chart';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };
    const { chartType, ...chartProps } = chartData;

    return (
        <div {...componentProps}>
            {
                chartType === 'bar' ?
                    <SVGBarChart {...chartProps}/>
                    :
                chartType === 'arc' ?
                    <SVGArcChart percentFull={chartProps.percentFull}/>
                    :
                    null
            }
        </div>
    );
};

RecommendationChart.propTypes = {
    className: PropTypes.string,
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
    }).isRequired
};

RecommendationChart.defaultProps = {};

// export default RecommendationChart;
module.exports = RecommendationChart;
