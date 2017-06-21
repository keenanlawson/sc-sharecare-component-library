import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.percentFull !== this.props.percentFull;
    }

    render() {
        const { className, headerText, percentFull, ...rest } = this.props;
        const componentClass = 'c-progress-bar';
        const headerClass = `${componentClass}__header`;
        const indicatorClass = `${componentClass}__indicator`;
        const progressClass = `${componentClass}__progress`;
        const textClass = `${componentClass}__text`;
        const componentClasses = classNames(componentClass, className);
        const percentFullInt = Math.abs(parseInt(percentFull || 0));
        const cleanPercentFull = `${percentFullInt > 100 ? 100 : percentFullInt}%`;
        const componentProps = { className: componentClasses, ...rest };

        return (
            <div {...componentProps}>
                {
                    headerText &&
                    <div className={headerClass}>{headerText}</div>
                }
                <div className={indicatorClass}>
                    <div className={progressClass} style={{width: cleanPercentFull}}/>
                </div>
                <div className={textClass}>{cleanPercentFull}</div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    headerText: PropTypes.string,
    percentFull: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
    headerText: "PROGRESS"
};

module.exports = ProgressBar;
