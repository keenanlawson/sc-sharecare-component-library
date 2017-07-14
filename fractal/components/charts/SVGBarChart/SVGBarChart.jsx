import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SVGBarChart = ({ className, percentFull = 0, fillClassName, chartMarkers, headerContent, footerContent }) => {
    const componentClass = 'c-svg-bar-chart';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses };

    // Set max possible width to accommodate for end markers being pushed off to the side at 100%
    const barMaxWidth = 99.75;

    // Truncate precision to 2 decimal places
    const truncatedPercentFull = Math.abs(parseFloat((percentFull || 0).toFixed(2)));

    // Ensure fill doesn't go past max
    const barPercentFull = truncatedPercentFull > barMaxWidth ? barMaxWidth : truncatedPercentFull;

    // Define color states
    const colorStates = [
        {name: 'neutral', color: '#999', hatchColor: '#888'},
        {name: 'very-low', color: '#d15050', hatchColor: '#d76a6a'},
        {name: 'low', color: '#fc0', hatchColor: '#ffd326'},
        {name: 'average', color: '#1aba9c', hatchColor: '#3cc4aa'},
        {name: 'above-average', color: '#277667', hatchColor: '#3d8376'},
        {name: 'high', color: '#2c9acc', hatchColor: '#4ba9d3'},
        {name: 'very-high', color: '#345779', hatchColor: '#52708c'}
    ];

    // Set default color state
    let chartColorState = colorStates[0];

    // If passed class name
    if (fillClassName) {
        // Use passed class name
        chartColorState = colorStates.find((state) => { return state.name === fillClassName; });
    } else if (barPercentFull < 25) {
        chartColorState = colorStates.find((state) => { return state.name === 'very-low'; });
    } else if (barPercentFull < 50) {
        chartColorState = colorStates.find((state) => { return state.name === 'low'; });
    } else if (barPercentFull === 50) {
        chartColorState = colorStates.find((state) => { return state.name === 'average'; });
    } else if (barPercentFull < 75) {
        chartColorState = colorStates.find((state) => { return state.name === 'above-average'; });
    } else if (barPercentFull < barMaxWidth) {
        chartColorState = colorStates.find((state) => { return state.name === 'high'; });
    } else {
        chartColorState = colorStates.find((state) => { return state.name === 'very-high'; });
    }

    const colorState = chartColorState.name;

    const chartResultClass = classNames('c-svg-bar-chart__result', colorState);
    const chartHatchClass = classNames('c-svg-bar-chart__hatch', colorState);

    return (
        <div {...componentProps}>
            {
                // Custom header content
                headerContent &&
                <div className="c-svg-bar-chart__header" dangerouslySetInnerHTML={{__html: headerContent}}/>
            }

            <svg className="c-svg-bar-chart__svg" width={`${barMaxWidth}%`} height="60">

                {/*Base background box*/}
                <rect className="c-svg-bar-chart__background" y="25" width={`${barMaxWidth}%`} height="30" fill="#f7f7f7"/>

                {/*Percentage full box*/}
                <rect className={chartResultClass} y="25" width={`${barPercentFull}%`} height="30" fill={chartColorState.color}/>

                {/*Diagonal hatch effect box for percentage full*/}
                <rect width={`${barPercentFull}%`} height="30" y="25" fill={`url(#diagonalHatch${colorState})`}/>

                {/*Hatch pattern description*/}
                <pattern id={`diagonalHatch${colorState}`} width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line className={chartHatchClass} x1="0" y1="0" x2="0" y2="10" strokeWidth="10" stroke={chartColorState.hatchColor}/>
                </pattern>

                {
                    // Display marker text
                    (chartMarkers && chartMarkers.length > 0) &&
                    chartMarkers.map((marker)=>{
                        let html = null;
                        if (marker.text) {
                            const isFirst = !marker.percent;
                            const isLast = marker.percent >= barMaxWidth;
                            const markerTextClass = classNames("c-svg-bar-chart__marker-text", {'is-first': isFirst}, {'is-last': isLast});
                            html = <text key={marker.percent} className={markerTextClass} x={`${marker.percent > barMaxWidth ? barMaxWidth : !!marker.percent ? marker.percent : '0'}%`} y="15">{marker.text}</text>;
                        }
                        return html;
                    })
                }

                {
                    // Display markers
                    (chartMarkers && chartMarkers.length > 0) &&
                    chartMarkers.map((marker)=>{
                        return <rect key={marker.percent} className="c-svg-bar-chart__marker" x={`${marker.percent > barMaxWidth ? barMaxWidth : !!marker.percent ? marker.percent : '0'}%`} y="20" width="1" height="40"/>;
                    })
                }

            </svg>

            {
                // Custom footer content
                footerContent &&
                <div className="c-svg-bar-chart__footer" dangerouslySetInnerHTML={{__html: footerContent}}/>
            }
        </div>
    );
};

SVGBarChart.propTypes = {
    className: PropTypes.string,
    percentFull: PropTypes.number.isRequired,
    fillClassName: PropTypes.string,
    chartMarkers: PropTypes.arrayOf(PropTypes.shape({
        percent: PropTypes.number.isRequired,
        text: PropTypes.string
    })),
    headerContent: PropTypes.string,
    footerContent: PropTypes.string
};

SVGBarChart.defaultProps = {
    percentFull: 95
};

// export default SVGBarChart;
module.exports = SVGBarChart;