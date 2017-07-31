import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import PartnerLogos from '../../logos/PartnerLogos/PartnerLogos.jsx';
import SocialLogos from '../../logos/SocialLogos/SocialLogos.jsx';

const SiteLogosBar = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const layerClass = `m-site-logos-bar`;
    const containerClass = `${layerClass}__container`;
    const partnersClass = `${layerClass}__partners`;
    const socialClass = `${layerClass}__social`;
    const logoClass = `${layerClass}__logo`;
    const iconClass = `${logoClass}-icon`;
    const labelClass = `${logoClass}-label`;

    // Extend class names
    const layerClasses = classNames(layerClass, className);
    const socialClasses = classNames(socialClass, 'l-hidden-lg-up');
    const partnerIconClasses = classNames(iconClass, 'l-hidden-md-down');
    const partnerLabelClasses = classNames(labelClass, 'l-hidden-lg-up');

    // Compose props
    const layerProps = {
        className: layerClasses,
        containerClass,
        ...rest
    };
    const logoProps = {
        logoClass,
        iconClass,
        labelClass
    };
    const partnerLogosProps = {
        ...logoProps,
        className: partnersClass,
        labelClass: partnerLabelClasses,
        iconClass: partnerIconClasses,
        iconOnly: false
    };
    const socialLogosProps = {
        ...logoProps,
        className: socialClasses
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            <PartnerLogos {...partnerLogosProps}/>
            <SocialLogos {...socialLogosProps}/>
        </PageLayer>
    );
};

SiteLogosBar.propTypes = {
    className: PropTypes.string
};

SiteLogosBar.defaultProps = {};

// export default SiteLogosBar;
module.exports = SiteLogosBar;
