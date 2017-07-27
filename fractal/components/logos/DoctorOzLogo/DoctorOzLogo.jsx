import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const DoctorOzLogo = (props) => {

    const {
        className,
        iconClass,
        labelClass,
        ...rest
    } = props;

    const linkClassName = 'c-dr-oz-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {
        className: linkClasses,
        labelClassName: labelClass,
        to: 'https://www.doctoroz.com',
        label: 'doctoroz.com',
        ...rest
    };
    const iconProps = {
        className: iconClasses,
        icon: 'dr-oz-logo'
    };

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

DoctorOzLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string,
    labelClass: PropTypes.string
};

DoctorOzLogo.defaultProps = {};

// export default DoctorOzLogo;
module.exports = DoctorOzLogo;
