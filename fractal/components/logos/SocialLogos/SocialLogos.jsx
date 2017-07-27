import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FacebookLogo from '../FacebookLogo/FacebookLogo.jsx';
import TwitterLogo from '../TwitterLogo/TwitterLogo.jsx';
import LinkedInLogo from '../LinkedInLogo/LinkedInLogo.jsx';
import GoogleLogo from '../GoogleLogo/GoogleLogo.jsx';
import InstagramLogo from '../InstagramLogo/InstagramLogo.jsx';
import PinterestLogo from '../PinterestLogo/PinterestLogo.jsx';

const SocialLogos = (props) => {

    const {
        className,
        logoClass,
        iconClass,
        ...rest
    } = props;

    const componentClass = 'm-social-logos';
    const logoClassName = `${componentClass}__logo`;
    const iconClassName = `${componentClass}__icon`;
    const logoProps = {
        className: classNames(logoClassName, logoClass),
        iconClass: classNames(iconClassName, iconClass)
    };

    return (
        <div className={classNames(componentClass, className)} {...rest}>
            <FacebookLogo {...logoProps}/>
            <TwitterLogo {...logoProps}/>
            <LinkedInLogo {...logoProps}/>
            <GoogleLogo {...logoProps}/>
            <InstagramLogo {...logoProps}/>
            <PinterestLogo {...logoProps}/>
        </div>
    );
};

SocialLogos.propTypes = {
    className: PropTypes.string,
    logoClass: PropTypes.string,
    iconClass: PropTypes.string
};

SocialLogos.defaultProps = {};

// export default SocialLogos;
module.exports = SocialLogos;
