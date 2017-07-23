import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LayerContainer = ({ className, ...rest }) => {
    const componentClass = 'c-layer-container';
    const gridClass = 'l-grid-wrapper l-grid-container-fluid';
    const componentClasses = classNames(componentClass, gridClass, className);
    return (
        <div className={componentClasses} {...rest}/>
    );
};

LayerContainer.propTypes = {
    className: PropTypes.string
};

LayerContainer.defaultProps = {};

// export default LayerContainer;
module.exports = LayerContainer;
