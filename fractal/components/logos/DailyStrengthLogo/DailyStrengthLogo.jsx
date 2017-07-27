import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const DailyStrengthLogo = (props) => {

    const {
        className,
        iconClass,
        labelClass,
        ...rest
    } = props;

    const linkClassName = 'c-daily-strength-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {
        className: linkClasses,
        labelClassName: labelClass,
        to: 'https://www.dailystrength.org',
        label: 'daily strength',
        ...rest
    };
    const iconProps = {
        className: iconClasses,
        icon: 'daily-strength-logo'
    };

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

DailyStrengthLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string,
    labelClass: PropTypes.string
};

DailyStrengthLogo.defaultProps = {};

// export default DailyStrengthLogo;
module.exports = DailyStrengthLogo;
