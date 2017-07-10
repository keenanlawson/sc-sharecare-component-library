import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const SVGIcon = ({ className, icon }) => {

    const componentClass = 'c-svg-icon';
    const iconClass = `${componentClass}--${icon}`;
    const componentClasses = classNames(componentClass, iconClass, className);

    return (
        <span className={componentClasses}/>
    );
};

SVGIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
};

SVGIcon.defaultProps = {};

// export default SVGIcon;
module.exports = SVGIcon;
