import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const GoogleLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-google-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.google.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'google'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

GoogleLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

GoogleLogo.defaultProps = {};

// export default GoogleLogo;
module.exports = GoogleLogo;
