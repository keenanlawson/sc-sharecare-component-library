import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const TwitterLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-twitter-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.twitter.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'twitter'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

TwitterLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

TwitterLogo.defaultProps = {};

// export default TwitterLogo;
module.exports = TwitterLogo;
