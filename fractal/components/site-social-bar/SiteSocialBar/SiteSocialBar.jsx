import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SocialLogos from '../../logos/SocialLogos/SocialLogos.jsx';

const SiteSocialBar = ({ className, ...rest }) => {
    const componentClass = `m-site-social-bar`;
    const containerClass = `${componentClass}__container`;
    const socialLogosClass = `${componentClass}__logos`;
    const socialLogoClass = `${componentClass}__logo`;
    const socialIconClass = `${componentClass}__icon`;
    const componentClasses = classNames(componentClass, className);
    return (
        <PageLayer className={componentClasses} containerClassName={containerClass} {...rest}>
            <SocialLogos className={socialLogosClass} logoClass={socialLogoClass} iconClass={socialIconClass}/>
        </PageLayer>
    );
};

SiteSocialBar.propTypes = {
    className: PropTypes.string
};

SiteSocialBar.defaultProps = {};

// export default SiteSocialBar;
module.exports = SiteSocialBar;
