import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RadioGroup = ({ className, label, error, children }) => {

    const componentClass = 'c-radio-group';
    const labelClass = `${componentClass}__label`;
    const errorClass = `${componentClass}__error`;
    const componentClasses = classNames(componentClass, className);

    return (
        <div className={componentClasses}>
            {label ? <div className={labelClass}>{label}</div> : null}
            {error ? <div className={errorClass}>{error}</div> : null}
            {children}
        </div>
    );
};

RadioGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ]),
};

RadioGroup.defaultProps = {};

// export default RadioGroup;
module.exports = RadioGroup;
