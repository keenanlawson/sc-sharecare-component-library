import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class StickyBar extends React.Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
        const screenBottom = window.screen.availHeight + window.scrollY;
        const stickyInitial = parseInt(this.sticky.getAttribute('data-sticky-initial'), 10);
        const stickyClass = 'is-sticky';
        if (this.props.stickyPosition === 'top') {
            const stickyEnter = parseInt(this.sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
            const stickyExit = parseInt(this.sticky.getAttribute('data-sticky-exit'), 10) || bottom;
            if (top >= stickyEnter && top <= stickyExit) {
                this.sticky.classList.add(stickyClass);
            } else {
                this.sticky.classList.remove(stickyClass);
            }
        }

        // stickyPosition === bottom
        else {
            const stickyEnter = parseInt(this.sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
            const stickyExit = parseInt(this.sticky.getAttribute('data-sticky-exit'), 10) || top;
            if (screenBottom <= stickyEnter && screenBottom <= stickyExit) {
                this.sticky.classList.add(stickyClass);
            } else {
                this.sticky.classList.remove(stickyClass);
            }
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    render() {
        if (this.sticky) this.sticky.setAttribute('data-sticky-initial', this.sticky.getBoundingClientRect()[this.props.stickyPosition].toString());
        const { className, enter, exit, stickyPosition = 'bottom', children } = this.props;
        const componentClass = 'c-sticky';
        const componentClasses = classNames(componentClass, className, `is-sticky-${stickyPosition}`);
        return (
            <div
                ref={(sticky)=>{this.sticky = sticky;}}
                className={componentClasses}
                data-sticky
                data-sticky-enter={enter}
                data-sticky-exit={exit}
            >
                {children}
            </div>
        );
    }
}

StickyBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    enter: PropTypes.string,
    exit: PropTypes.string,
    stickyPosition: PropTypes.oneOf(['top', 'bottom'])
};

StickyBar.defaultProps = {
    stickyPosition: 'bottom'
};

module.exports = StickyBar;
