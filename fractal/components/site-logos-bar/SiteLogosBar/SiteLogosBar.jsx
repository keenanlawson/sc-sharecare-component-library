import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import PartnerLogos from '../../logos/PartnerLogos/PartnerLogos.jsx';
import SocialLogos from '../../logos/SocialLogos/SocialLogos.jsx';

const SiteLogosBar = ({ className, ...rest }) => {

    const componentClass = `m-site-logos-bar`;
    const containerClass = `${componentClass}__container`;
    const partnersClass = `${componentClass}__partners`;
    // const socialClass = `${componentClass}__social`;
    const componentClasses = classNames(componentClass, className);

    return (
        <PageLayer className={componentClasses} containerClassName={containerClass} {...rest}>
            <PartnerLogos className={partnersClass}/>
            <SocialLogos className={socialLogosClass} logoClass={socialLogoClass} iconClass={socialIconClass}/>
        </PageLayer>
    );
};

SiteLogosBar.propTypes = {
    className: PropTypes.string
};

SiteLogosBar.defaultProps = {};

// export default SiteLogosBar;
module.exports = SiteLogosBar;
