import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';

const TitleBar = (props) => {

    // Expand props
    const {
        className,
        text,
        mainHeading = true,
        ...rest
    } = Object.assign({}, TitleBar.defaultProps, props);

    // Set class names
    const componentClass = 'c-title-bar';
    const textClass = `${componentClass}__text`;

    // Extend class names
    const componentClasses = classNames(componentClass, className);

    // Compose props
    const layerProps = {
        className: componentClasses,
        ...rest
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            {
                mainHeading
                    ?
                <h1 className={textClass}>{text}</h1>
                    :
                <span className={textClass}>{text}</span>
            }
        </PageLayer>
    );
};

TitleBar.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    mainHeading: PropTypes.bool
};

TitleBar.defaultProps = {
    mainHeading: true
};

// export default TitleBar;
module.exports = TitleBar;
