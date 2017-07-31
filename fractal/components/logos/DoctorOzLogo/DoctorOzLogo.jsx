import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const DoctorOzLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.doctoroz.com",
        label: "doctoroz.com",
        icon: "dr-oz-logo",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

DoctorOzLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

DoctorOzLogo.defaultProps = {};

// export default DoctorOzLogo;
module.exports = DoctorOzLogo;
