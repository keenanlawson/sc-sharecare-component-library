import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SiteLogosBar from '../SiteLogosBar/SiteLogosBar.jsx';
import SiteAboutBar from '../SiteAboutBar/SiteAboutBar.jsx';
import SiteDisclaimerBar from '../SiteDisclaimerBar/SiteDisclaimerBar.jsx';

const SiteFooter = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'm-site-footer';
    const FADClass = `${componentClass}__fad`;

    // Extend class names
    const componentClasses = classNames(componentClass, className);

    // Compose props
    const footerProps = {
        className: componentClasses,
        ...rest
    };

    // Render
    return (
        <footer {...footerProps}>
            <SiteLogosBar/>
            <SiteAboutBar/>
            <div className={FADClass}/>
            <SiteDisclaimerBar/>
        </footer>
    );
};

SiteFooter.propTypes = {
    className: PropTypes.string
};

SiteFooter.defaultProps = {};

// export default SiteFooter;
module.exports = SiteFooter;
