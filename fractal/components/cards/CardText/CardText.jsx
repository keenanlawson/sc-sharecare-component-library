import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CardHeader from'../CardHeader/CardHeader.jsx';

const CardText = ({ className, headerClassName, textClassName, titleClassName, subtitleClassName, title, subtitle, text, html }) => {
    const componentClass = 'c-card__text';
    const headerClass = `${componentClass}-header`;
    const textClass = `${componentClass}-body`;
    const componentClasses = classNames(componentClass, className);
    const headerClasses = classNames(headerClass, headerClassName);
    const textClasses = classNames(textClass, textClassName);
    const componentProps = { className: componentClasses };

    return (
        <div {...componentProps}>
            {
                (title || subtitle) &&
                <CardHeader
                    className={headerClasses}
                    title={title}
                    titleClassName={titleClassName}
                    subtitle={subtitle}
                    subtitleClassName={subtitleClassName}
                />
            }
            {
                text &&
                <div className={textClasses}>{text}</div>
            }
            {
                html &&
                <div
                    className={textClasses}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            }
        </div>
    );
};

CardText.propTypes = {
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    textClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    html: PropTypes.string
};

CardText.defaultProps = {};

// export default CardText;
module.exports = CardText;
