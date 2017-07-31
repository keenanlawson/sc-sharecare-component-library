import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteAboutLinks from '../SiteAboutLinks/SiteAboutLinks.jsx';
import SocialLogos from '../../logos/SocialLogos/SocialLogos.jsx';

const SiteAboutBar = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const layerClass = `m-site-about-bar`;
    const containerClass = `${layerClass}__container`;
    const aboutClass = `${layerClass}__about`;
    const socialClass = `${layerClass}__social`;
    const logoClass = `${layerClass}__logo`;
    const tabClass = `${layerClass}__tab`;
    const iconClass = `${layerClass}__icon`;
    const labelClass = `${layerClass}__label`;

    // Extend class names
    const layerClasses = classNames(layerClass, className);
    const socialClasses = classNames(socialClass, 'l-hidden-md-down');

    // Compose props
    const layerProps = {
        className: layerClasses,
        containerClass,
        ...rest
    };
    const aboutProps = {
        className: aboutClass,
        tabClass,
        labelClass
    };
    const socialLogosProps = {
        className: socialClasses,
        logoClass,
        iconClass
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            <SiteAboutLinks {...aboutProps}/>
            <SocialLogos {...socialLogosProps}/>
        </PageLayer>
    );
};

SiteAboutBar.propTypes = {
    className: PropTypes.string
};

SiteAboutBar.defaultProps = {};

// export default SiteAboutBar;
module.exports = SiteAboutBar;
