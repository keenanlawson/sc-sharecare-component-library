import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const LinkedInLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-linkedin-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.linkedin.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'linkedin'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

LinkedInLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

LinkedInLogo.defaultProps = {};

// export default LinkedInLogo;
module.exports = LinkedInLogo;
