import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import GlobalSearchForm from '../../searches/GlobalSearchForm/GlobalSearchForm.jsx';
import Button from '../../buttons/Button/Button.jsx';

const SiteSearchBar = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const componentClass = `m-site-search-bar`;
    const containerClass = `${componentClass}__container`;
    const formClass = `${componentClass}__search`;
    const loginRegisterClass = `${componentClass}__login-register`;
    const loginRegisterLinkClass = `${loginRegisterClass}-link`;

    // Extend class names
    const layerClasses = classNames(componentClass, className, 'l-hidden-xs');

    // Compose props
    const layerProps = {
        className: layerClasses,
        containerClass,
        ...rest
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            <GlobalSearchForm className={formClass}/>
            <div className={loginRegisterClass}>
                <Button className={loginRegisterLinkClass} style="cta" label="Join Sharecare"/>
                <Button className={loginRegisterLinkClass} style="secure" label="Log In"/>
            </div>
        </PageLayer>
    );
};

SiteSearchBar.propTypes = {
    className: PropTypes.string
};

SiteSearchBar.defaultProps = {};

// export default SiteSearchBar;
module.exports = SiteSearchBar;
