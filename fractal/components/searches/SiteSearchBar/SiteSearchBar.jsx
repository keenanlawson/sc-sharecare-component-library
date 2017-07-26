import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import GlobalSearchForm from '../../searches/GlobalSearchForm/GlobalSearchForm.jsx';
import Button from '../../buttons/Button/Button.jsx';

const SiteSearchBar = ({ className, ...rest }) => {

    const componentClass = `c-site-search-bar`;
    const containerClass = `${componentClass}__container`;
    const formClass = `${componentClass}__search`;
    const loginRegisterClass = `${componentClass}__login-register`;
    const loginRegisterLinkClass = `${loginRegisterClass}-link`;
    const componentClasses = classNames(componentClass, className, 'l-hidden-xs');

    return (
        <PageLayer className={componentClasses} containerClassName={containerClass} {...rest}>
            <GlobalSearchForm className={formClass}/>
            <div className={loginRegisterClass}>
                <Button style="cta" className={loginRegisterLinkClass} label="Join Sharecare"/>
                <Button style="secure" className={loginRegisterLinkClass} label="Log In"/>
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
