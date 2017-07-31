import React from 'react';
import PropTypes from 'prop-types';

import FacebookLogo from '../FacebookLogo/FacebookLogo.jsx';
import TwitterLogo from '../TwitterLogo/TwitterLogo.jsx';
import LinkedInLogo from '../LinkedInLogo/LinkedInLogo.jsx';
import GoogleLogo from '../GoogleLogo/GoogleLogo.jsx';
import InstagramLogo from '../InstagramLogo/InstagramLogo.jsx';
import PinterestLogo from '../PinterestLogo/PinterestLogo.jsx';

const SocialLogos = (props) => {

    // Expand props
    const {
        className,
        logoClass,
        ...rest
    } = props;

    // Compose props
    const logoProps = {
        className: logoClass,
        ...rest
    };

    // Render
    return (
        <div className={className}>
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
    iconClass: PropTypes.string,
    labelClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

SocialLogos.defaultProps = {};

// export default SocialLogos;
module.exports = SocialLogos;
