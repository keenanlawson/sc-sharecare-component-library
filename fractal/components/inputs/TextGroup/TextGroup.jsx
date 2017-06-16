import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextGroup = ({ className, label, error, children }) => {

    const componentClass = 'c-radio-group';
    const labelClass = `${componentClass}__label`;
    const errorClass = `${componentClass}__error`;
    const componentClasses = classNames(componentClass, className);

    return (
        <div className={componentClasses}>
            {label ? <div className={labelClass}>{label}</div> : null}
            {!!error && !error instanceof PropTypes.bool ? <div className={errorClass}>{error}</div> : null}
            {children}
        </div>
    );
};

TextGroup.propTypes = {
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

TextGroup.defaultProps = {};

// export default TextGroup;
module.exports = TextGroup;
