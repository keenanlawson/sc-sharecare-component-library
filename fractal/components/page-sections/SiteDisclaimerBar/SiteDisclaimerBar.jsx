import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteDisclaimerText from '../SiteDisclaimerText/SiteDisclaimerText.jsx';
import SiteDisclaimerLinks from '../SiteDisclaimerLinks/SiteDisclaimerLinks.jsx';

const SiteDisclaimerBar = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const layerClass = `m-site-disclaimer-bar`;
    const containerClass = `${layerClass}__container`;
    const disclaimerClass = `${layerClass}__text`;
    const entityClass = `${layerClass}__entity`;
    const linksClass = `${layerClass}__links`;
    const linkClass = `${layerClass}__link`;
    const labelClass = `${layerClass}__link-label`;

    // Extend class names
    const layerClasses = classNames(layerClass, className);

    // Compose props
    const layerProps = {
        className: layerClasses,
        containerClass,
        ...rest
    };
    const disclaimerProps = {
        className: disclaimerClass,
        entityClass: entityClass
    };
    const navProps = {
        className: linksClass,
        linkClass,
        labelClass
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            <SiteDisclaimerText {...disclaimerProps}/>
            <SiteDisclaimerLinks {...navProps}/>
        </PageLayer>
    );
};

SiteDisclaimerBar.propTypes = {
    className: PropTypes.string
};

SiteDisclaimerBar.defaultProps = {};

// export default SiteDisclaimerBar;
module.exports = SiteDisclaimerBar;
