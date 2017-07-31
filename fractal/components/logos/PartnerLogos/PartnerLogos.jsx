import React from 'react';
import PropTypes from 'prop-types';

import SharecareLogo from '../SharecareLogo/SharecareLogo.jsx';
import DoctorOzLogo from '../DoctorOzLogo/DoctorOzLogo.jsx';
import DailyStrengthLogo from '../DailyStrengthLogo/DailyStrengthLogo.jsx';

const PartnerLogos = (props) => {

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
            <SharecareLogo {...logoProps} monochrome/>
            <DoctorOzLogo {...logoProps}/>
            <DailyStrengthLogo {...logoProps}/>
        </div>
    );
};

PartnerLogos.propTypes = {
    className: PropTypes.string,
    logoClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

PartnerLogos.defaultProps = {};

// export default PartnerLogos;
module.exports = PartnerLogos;
