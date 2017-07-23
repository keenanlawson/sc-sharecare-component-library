import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import LayerContainer from '../LayerContainer/LayerContainer.jsx';

const PageLayer = ({ className, containerClassName, children, constrained = true, ...rest }) => {

    const componentClass = 'c-page-layer';
    const containerClass = `${componentClass}__container`;
    const constrainedClass = 'is-constrained';
    const componentClasses = classNames(componentClass, className, {[constrainedClass]: constrained});
    const containerClasses = classNames(containerClass, {[containerClassName]: containerClassName});

    return (
        <div className={componentClasses} {...rest}>
            {
                constrained
                    ?
                <LayerContainer className={containerClasses}>{children}</LayerContainer>
                    :
                {children}
            }
        </div>
    );
};

PageLayer.propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    constrained: PropTypes.bool,
    children: PropTypes.node
};

PageLayer.defaultProps = {
    constrained: true
};

// export default PageLayer;
module.exports = PageLayer;
