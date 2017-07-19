import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const HashLink = ({ className, to, label, children, ...rest }) => {
    const componentClass = 'c-link';
    const labelClass = `${componentClass}__label`;
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };

    return (
        <Link to={to} {...componentProps} title={label}>
            {label && <span className={labelClass}>{label}</span>}
            {children}
        </Link>
    );
};

HashLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    label: PropTypes.string
};

HashLink.defaultProps = {};

// export default HashLink;
module.exports = HashLink;
