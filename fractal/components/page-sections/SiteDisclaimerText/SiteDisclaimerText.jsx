import React from 'react';
import PropTypes from 'prop-types';

const SiteDisclaimer = (props) => {

    // Expand props
    const {
        className,
        entityClass,
        ...rest
    } = props;

    // Set class names

    // Extend class names

    // Compose props
    const disclaimerProps = {
        className,
        ...rest
    };

    // Render
    return (
        <div {...disclaimerProps}>© <span className={entityClass}>2010-2017 Sharecare, Inc.</span> All content posted on this site is the responsibility of the party posting such content. Participation on this site by a party does not imply endorsement of any other party's content, products, or services. Content should not be used for medical advice, diagnosis, or treatment.</div>
    );
};

SiteDisclaimer.propTypes = {
    className: PropTypes.string,
    entityClass: PropTypes.string
};

SiteDisclaimer.defaultProps = {};

// export default SiteDisclaimer;
module.exports = SiteDisclaimer;
