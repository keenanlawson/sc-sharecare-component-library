import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ overlay = false, fullscreen = false, text }) => {
    const componentClass = 'c-loading';
    const spinnerClass = `${componentClass}__spinner`;
    const componentClasses = classNames(componentClass,
        {['is-overlay']: overlay || fullscreen},
        {['is-fullscreen']: fullscreen}
    );
    const componentProps = { className: componentClasses };

    return (
        <div {...componentProps}>
            {
                text &&
                <div className={`${componentClass}__text`}>{text}</div>
            }
            <div className={spinnerClass}/>
        </div>
    );
};

LoadingSpinner.propTypes = {
    overlay: PropTypes.bool,
    fullscreen: PropTypes.bool,
    text: PropTypes.string
};

LoadingSpinner.defaultProps = {};

// export default LoadingSpinner;
module.exports = LoadingSpinner;
