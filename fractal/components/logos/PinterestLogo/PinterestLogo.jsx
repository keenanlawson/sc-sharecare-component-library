import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const PinterestLogo = (props) => {

    const {
        className,
        iconClass,
        ...rest
    } = props;

    const linkClassName = 'c-pinterest-logo';
    const iconClassName = `${linkClassName}__icon`;
    const linkClasses = classNames(linkClassName, className);
    const iconClasses = classNames(iconClassName, iconClass);
    const linkProps = {className: linkClasses, to: 'https://www.pinterest.com', ...rest};
    const iconProps = {className: iconClasses, icon: 'pinterest'};

    return (
        <Link {...linkProps}>
            <SVGIcon {...iconProps}/>
        </Link>
    );
};

PinterestLogo.propTypes = {
    className: PropTypes.string,
    iconClass: PropTypes.string
};

PinterestLogo.defaultProps = {};

// export default PinterestLogo;
module.exports = PinterestLogo;
