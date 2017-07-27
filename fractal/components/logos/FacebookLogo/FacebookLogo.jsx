import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const FacebookLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-facebook-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.facebook.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'facebook'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

FacebookLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

FacebookLogo.defaultProps = {};

// export default FacebookLogo;
module.exports = FacebookLogo;
