import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({ className, labelClassName, to, label, children, ...rest }) => {
    const componentClass = 'c-link';
    const labelClass = `${componentClass}__label`;
    const componentClasses = classNames(componentClass, className);
    const labelClasses = classNames(labelClass, labelClassName);
    const componentProps = { className: componentClasses, ...rest };

    return (
        <a href={to} {...componentProps} title={label}>
            {label && <span className={labelClasses}>{label}</span>}
            {children}
        </a>
    );
};

Link.propTypes = {
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    label: PropTypes.string
};

Link.defaultProps = {};

// export default Link;
module.exports = Link;
