import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RadioGroup = ({ className, label, error, required, children }) => {

    const componentClass = 'c-radio-group';
    const labelClass = `${componentClass}__label`;
    const errorClass = `${componentClass}__error`;
    const requiredClass = `${componentClass}__required`;
    const componentClasses = classNames(componentClass, className);

    return (
        <div className={componentClasses}>
            {label ? <span className={labelClass}>{label}{required ? <span className={requiredClass}> * </span> : null}</span> : null}
            {!!error && !(typeof error === 'boolean') ? <div className={errorClass}>{error}</div> : null}
            {children}
        </div>
    );
};

RadioGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    required: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ])
};

RadioGroup.defaultProps = {};

// export default RadioGroup;
module.exports = RadioGroup;
