import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ overlay = false, text }) => {
    const componentClass = 'c-loading';
    const spinnerClass = `${componentClass}__spinner`;
    const componentClasses = classNames(componentClass, {['is-overlay']: overlay});
    const spinnerClasses = classNames(spinnerClass, {['is-overlay']: overlay});
    const componentProps = { className: componentClasses };

    return (
        <div {...componentProps}>
            {
                text &&
                <div className={`${componentClass}__text`}>{text}</div>
            }
            <div className={spinnerClasses}/>
        </div>
    );
};

LoadingSpinner.propTypes = {
    overlay: PropTypes.bool,
    text: PropTypes.string
};

LoadingSpinner.defaultProps = {};

// export default LoadingSpinner;
module.exports = LoadingSpinner;
