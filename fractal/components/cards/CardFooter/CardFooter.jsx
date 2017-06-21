import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardFooter = ({ className, children, ...rest }) => {
    const componentClass = 'c-card__footer';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };

    return (
        <div {...componentProps}>
            {children}
        </div>
    );
};

CardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

CardFooter.defaultProps = {};

// export default CardFooter;
module.exports = CardFooter;
