import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CardHeader from'../CardHeader/CardHeader';

const CardText = ({ className, title, subtitle, text, ...rest }) => {
    const componentClass = 'c-card__text';
    const textClass = `${componentClass}-body`;
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };
    const headerClassName = `${componentClass}-header`;

    return (
        <div {...componentProps}>
            {
                (title || subtitle) &&
                <CardHeader className={headerClassName} title={title} subtitle={subtitle}/>
            }
            <div className={textClass}>{text}</div>
        </div>
    );
};

CardText.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired
};

CardText.defaultProps = {};

// export default CardText;
module.exports = CardText;
