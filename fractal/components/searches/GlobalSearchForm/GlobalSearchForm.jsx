import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TextInput from '../../inputs/TextInput/TextInput.jsx';
import Button from '../../buttons/Button/Button.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const GlobalSearchForm = ({ className, ...rest }) => {

    const componentClass = 'c-global-search-form';
    const searchClass = `${componentClass}__search-input`;
    const textClass = `${componentClass}__text`;
    const inputClass = `${componentClass}__input`;
    const submitClass = `${componentClass}__submit`;
    const iconClass = `${componentClass}__submit-icon`;
    const componentClasses = classNames(componentClass, className);

    return (
        <form className={componentClasses} {...rest}>
            <div className={searchClass}>
                <TextInput
                    className={textClass}
                    inputClassName={inputClass}
                    placeholder="Search..."
                    name="query"
                />
                <Button
                    className={submitClass}
                    submit
                    label={<SVGIcon className={iconClass} icon="search-color"/>}
                />
            </div>
        </form>
    );
};

GlobalSearchForm.propTypes = {
    className: PropTypes.string,
    action: PropTypes.string
};

GlobalSearchForm.defaultProps = {};

// export default GlobalSearchForm;
module.exports = GlobalSearchForm;
