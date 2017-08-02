import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import LayerContainer from '../LayerContainer/LayerContainer.jsx';

const PageLayer = ({ className, containerClass, children, constrained = true, ...rest }) => {

    const componentClass = 'c-page-layer';
    const containerClassName = `${componentClass}__container`;
    const constrainedClass = 'is-constrained';
    const componentClasses = classNames(componentClass, className, {[constrainedClass]: constrained});
    const containerClasses = classNames(containerClassName, {[containerClass]: containerClass});

    return (
        <section className={componentClasses} {...rest}>
            {
                constrained
                    ?
                <LayerContainer className={containerClasses}>{children}</LayerContainer>
                    :
                {children}
            }
        </section>
    );
};

PageLayer.propTypes = {
    className: PropTypes.string,
    containerClass: PropTypes.string,
    constrained: PropTypes.bool,
    children: PropTypes.node
};

PageLayer.defaultProps = {
    constrained: true
};

// export default PageLayer;
module.exports = PageLayer;
