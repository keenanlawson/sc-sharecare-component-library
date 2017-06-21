import React from 'react';
import { StaticRouter, Link } from 'react-router-dom';

import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardFooterLink = ({ className, to, label, children, ...rest }) => {
    const componentClass = 'c-card__footer-link';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, to, ...rest };

    return (
        <StaticRouter>
            <Link {...componentProps}>
                {label || to}
                {children}
            </Link>
        </StaticRouter>
    );
};

CardFooterLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    label: PropTypes.string
};

CardFooterLink.defaultProps = {};

// export default CardFooterLink;
module.exports = CardFooterLink;
