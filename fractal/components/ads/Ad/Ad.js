import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Ad extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.props.loadAsync && window.googletag) {
            window.googletag.display(this.props.id);
        }
    }

    render() {
        const componentClass = 'c-ad';
        const frameClass = `${componentClass}__frame`;
        const frameClasses = classNames(frameClass,
            {['has-text']: this.props.showAdText}
        );
        const textClass = `${componentClass}__text`;

        return (
            <div className={componentClass}>
                {
                    this.props.showAdText &&
                    <div className={textClass}>Advertisement</div>
                }
                <div id={this.props.id} className={frameClasses}/>
            </div>
        );
    }
}

Ad.propTypes = {
    id: PropTypes.string,
    showAdText: PropTypes.bool,
    loadAsync: PropTypes.bool
};

Ad.defaultProps = {};

// module.exports = Ad;
