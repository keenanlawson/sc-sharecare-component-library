import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, className, ...rest }) => {
    const componentClass = 'c-card';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };

    return (
        <div {...componentProps}>
            {children}
        </div>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ])
};

Card.defaultProps = {};

// export default Card;
module.exports = Card;
