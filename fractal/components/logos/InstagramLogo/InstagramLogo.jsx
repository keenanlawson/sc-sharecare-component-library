import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const InstagramLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-instagram-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.instagram.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'instagram'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

InstagramLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

InstagramLogo.defaultProps = {};

// export default InstagramLogo;
module.exports = InstagramLogo;
