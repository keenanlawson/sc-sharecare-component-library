import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SVGLineChart = ({ className, percentFull = 0, ...rest }) => {
    const componentClass = 'c-svg-line-chart';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };

    // Set max possible width to accommodate for end markers being pushed off to the side at 100%
    const barMaxWidth = 99.75;

    // Truncate precision to 2 decimal places
    const truncatedPercentFull = Math.abs(parseFloat((percentFull || 0).toFixed(2)));

    // Ensure fill doesn't go past max
    const barPercentFull = truncatedPercentFull > barMaxWidth ? barMaxWidth : truncatedPercentFull;
    const barPercentFullText = parseInt(barPercentFull >= barMaxWidth ? 100 : barPercentFull);

    const maskPercentFull = barMaxWidth - barPercentFull;

    // Percentage full representation colors
    const backgrounds = [
        {from: 0, width: 10, max: 10, fillClassName: 'def-con-1'},
        {from: 10, width: 15, max: 25, fillClassName: 'def-con-2'},
        {from: 25, width: 25, max: 50, fillClassName: 'def-con-3'},
        {from: 50, width: 30, max: 80, fillClassName: 'def-con-4'},
        {from: 80, width: 19.75, max: barMaxWidth, fillClassName: 'def-con-5'}
    ];

    const markerFillClassName = backgrounds.find((item) => {
        return item.max >= barPercentFull;
    }).fillClassName;

    const markerClassName = classNames('c-svg-line-chart__marker', markerFillClassName);

    return (
        <div {...componentProps}>

    <svg className="c-svg-line-chart__svg" width="100%" height="80">

        {/*Percentage Score Text*/}
        <text className="c-svg-line-chart__percentage" x="50%" y="34">{barPercentFullText}</text>
        <text className="c-svg-line-chart__text" x="50%" y="55">out of 100</text>

    {/*Base background box*/}
    <rect className="c-svg-line-chart__background" y="70" width={`${barMaxWidth}%`} height="8"/>

        {
            // Display background color representations
            backgrounds.map((background)=>{
            const backgroundClassName = classNames('c-svg-line-chart__background', background.fillClassName);
            return <rect key={Math.random()} className={backgroundClassName} x={`${background.from}%`} y="70" width={`${background.width}%`} height="8"/>;
        })
}

    {/*Percentage full box*/}
    <rect className="c-svg-line-chart__result" x={`${barPercentFull}%`} y="70" width={`${maskPercentFull}%`} height="8"/>

        {/*Marker at percentage score*/}
        <rect className={markerClassName} x={`${barPercentFull}%`} y="68" width="2" height="10"/>;

    </svg>

    </div>
    );
};

SVGLineChart.propTypes = {
    className: PropTypes.string,
    percentFull: PropTypes.number.isRequired
};

SVGLineChart.defaultProps = {
    percentFull: 95
};

// export default SVGLineChart;
module.exports = SVGLineChart;