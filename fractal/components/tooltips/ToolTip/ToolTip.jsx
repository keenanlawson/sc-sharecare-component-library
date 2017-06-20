import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ToolTip extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: props.expanded };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.expanded !== nextProps.expanded) {
            this.setState({expanded: nextProps.expanded});
        }
    }

    componentDidUpdate() {
        const componentClass = 'c-tooltip';
        const bodyClass = `${componentClass}__body`;
        if (this.tooltip) {
            const body = this.tooltip.getElementsByClassName(bodyClass)[0];
            if (body) {
                const tooltipPos = body.getBoundingClientRect();
                if (tooltipPos.right > screen.width) {
                    body.className = classNames(body.className, 'push-left');
                }
                if (tooltipPos.left < 10) {
                    body.className = classNames(body.className, 'push-right');
                }
            }
        }
    }

    handleClick() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const componentClass = 'c-tooltip';
        const labelClass = `${componentClass}__label`;
        const bodyClass = `${componentClass}__body`;
        const componentClasses = classNames(componentClass, this.props.className);
        const bodyClasses = classNames(bodyClass, this.props.className);

        return (
            <div className={componentClasses} ref={(tooltip) => { this.tooltip = tooltip;}}>
                <div className={labelClass} onClick={this.handleClick}>{this.props.label}</div>
                {
                    this.state.expanded &&
                    <div className={bodyClasses}>{this.props.text}</div>
                }
            </div>
        );
    }
}

ToolTip.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    text: PropTypes.string,
    expanded: PropTypes.bool
};

ToolTip.defaultProps = {};

module.exports = ToolTip;