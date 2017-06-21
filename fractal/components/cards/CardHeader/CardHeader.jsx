import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardHeader = ({ className, title, subtitle, simple, ...rest }) => {
    const componentClass = 'c-card__header';
    const titleClass = `${componentClass}-title`;
    const subtitleClass = `${componentClass}-subtitle`;
    const simpleHeaderClass = 'is-simple';
    const fullHeaderClass = 'is-small';
    const componentClasses = classNames(componentClass, className,
        {[simpleHeaderClass]: simple},
        {[fullHeaderClass]: (title && subtitle) && !simple}
    );
    const titleClasses = classNames(titleClass, {[simpleHeaderClass]: simple});
    const componentProps = { className: componentClasses, ...rest };

    return (
        <div {...componentProps}>
            {
                title &&
                <div className={titleClasses}>{title}</div>
            }
            {
                (!simple && subtitle) &&
                <div className={subtitleClass}>{subtitle}</div>
            }
        </div>
    );
};

CardHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    simple: PropTypes.bool
};

CardHeader.defaultProps = {
    simple: false
};

// export default CardHeader;
module.exports = CardHeader;
