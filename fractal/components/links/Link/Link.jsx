import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Link = (props) => {

    // Expand props
    const {
        className,
        labelClass,
        to,
        label,
        children,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'c-link';
    const labelClassName = `${componentClass}__label`;

    // Extend class names
    const componentClasses = classNames(componentClass, className);
    const labelClasses = classNames(labelClassName, labelClass);

    // Compose props
    const componentProps = {
        className: componentClasses,
        href: to,
        ...rest
    };

    // Render
    return (
        <a {...componentProps}>
            {label && <span className={labelClasses}>{label}</span>}
            {children}
        </a>
    );
};

Link.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    children: PropTypes.node
};

Link.defaultProps = {};

// export default Link;
module.exports = Link;
