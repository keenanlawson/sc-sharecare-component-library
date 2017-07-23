// TODO: determine if 'is-skinny' state is still needed
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';

const TitleBar = ({ className, text, mainHeading = true, skinny = false, ...rest }) => {

    const componentClass = 'c-title-bar';
    const textClass = `${componentClass}__text`;
    const skinnyClass = 'is-skinny';
    const componentClasses = classNames(componentClass, className,
        {[skinnyClass]: skinny});

    return (
        <PageLayer className={componentClasses} {...rest}>
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
    mainHeading: PropTypes.bool,
    skinny: PropTypes.bool
};

TitleBar.defaultProps = {
    mainHeading: true,
    skinny: false
};

// export default TitleBar;
module.exports = TitleBar;
