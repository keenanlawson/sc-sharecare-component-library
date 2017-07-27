import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const SharecareLogo = (props) => {

    const {
        className,
        iconClass,
        labelClass,
        monochrome,
        colorIcon,
        baseUrl = 'https://www.sharecare.com',
        ...rest
    } = props;

    const linkClassName = 'c-sharecare-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {
        className: linkClasses,
        labelClassName: labelClass,
        to: baseUrl,
        label: 'sharecare',
        ...rest
    };
    const icon = monochrome ? 'sharecare-logo-monochrome' : colorIcon ? 'sharecare-icon-color' : 'sharecare-logo-color';
    const iconProps = {
        className: iconClasses,
        icon
    };

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

SharecareLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string,
    labelClass: PropTypes.string,
    monochrome: PropTypes.bool,
    colorIcon: PropTypes.bool,
    baseUrl: PropTypes.string
};

SharecareLogo.defaultProps = {
    baseUrl: 'https://www.sharecare.com',
    monochrome: false
};

// export default SharecareLogo;
module.exports = SharecareLogo;
