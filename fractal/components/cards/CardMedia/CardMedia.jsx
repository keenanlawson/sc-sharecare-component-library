import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CardHeader from'../CardHeader/CardHeader.jsx';

const CardMedia = ({ className, title, subtitle, imageUrl, ...rest }) => {
    const componentClass = 'c-card__media';
    const imageClass = `${componentClass}-image`;
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };
    const headerClassName = `${componentClass}-header`;

    return (
        <div {...componentProps}>
            <img className={imageClass} src={imageUrl}/>
            {
                (title || subtitle) &&
                <CardHeader className={headerClassName} title={title} subtitle={subtitle}/>
            }
        </div>
    );
};

CardMedia.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

CardMedia.defaultProps = {};

// export default CardMedia;
module.exports = CardMedia;
