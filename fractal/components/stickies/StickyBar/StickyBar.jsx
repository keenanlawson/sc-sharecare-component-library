import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class StickyBar extends React.Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.onOrientationChange = this.onOrientationChange.bind(this);
        this.sizeElements = this.sizeElements.bind(this);
    }

    onScroll() {
        console.log('scrolling');

        const top = document.documentElement.scrollTop || document.body.scrollTop;
        console.log('top:', top);
        const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
        console.log('bottom:', bottom);
        const screenBottom = window.innerHeight + window.scrollY;
        console.log('screenBottom:', screenBottom);
        const stickyInitial = parseInt(this.sticky.getAttribute('data-sticky-initial'), 10);
        console.log('stickyInitial:', stickyInitial);
        const stickyEnter = parseInt(this.sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        console.log('stickyEnter:', stickyEnter);
        const stickyClass = 'is-sticky';
        if (this.props.stickyPosition === 'top') {
            const stickyExit = parseInt(this.sticky.getAttribute('data-sticky-exit'), 10) || bottom;
            if (top >= stickyEnter && top <= stickyExit) {
                this.sticky.classList.add(stickyClass);
            } else {
                this.sticky.classList.remove(stickyClass);
            }
        }

        // stickyPosition === bottom
        else {
            const stickyExit = parseInt(this.sticky.getAttribute('data-sticky-exit'), 10) || top;
            if (screenBottom <= stickyEnter && screenBottom >= stickyExit) {
                this.sticky.classList.add(stickyClass);
            } else {
                this.sticky.classList.remove(stickyClass);
            }
        }
    }

    // Listen for resize changes
    onOrientationChange() {

        // Remove stickiness
        this.sticky.classList.remove('is-sticky');
        this.sticky.parentElement.setAttribute('style', '');

        this.sizeElements();

        // Force update on initialization in case element is in a position to be sticky
        this.onScroll();
    }

    sizeElements() {
        const stickyClient = this.sticky.getBoundingClientRect();
        const topInitial = this.sticky.offsetTop;
        const bottomInitial = topInitial + this.sticky.offsetHeight;
        const initial = this.props.stickyPosition === 'top' ? topInitial : bottomInitial;
        this.sticky.setAttribute('data-sticky-initial', initial.toString());
        this.sticky.parentElement.setAttribute('style', `width: ${stickyClient.width}px; height: ${stickyClient.height}px;`);
    }

    componentDidMount() {
        this.sizeElements();
        document.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onOrientationChange);
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
        document.removeEventListener('resize', this.onOrientationChange);
    }

    render() {
        const { className, enter, exit, stickyPosition = 'bottom', children } = this.props;
        const componentClass = 'c-sticky-bar';
        const componentClasses = classNames(componentClass, className);
        const stickyClass = 'c-sticky';
        const stickyClasses = classNames(stickyClass, `is-sticky-${stickyPosition}`);
        return (
            <div className={componentClasses}>
                <div
                    ref={(sticky)=>{this.sticky = sticky;}}
                    className={stickyClasses}
                    data-sticky
                    data-sticky-enter={enter}
                    data-sticky-exit={exit}
                >
                    {children}
                </div>
            </div>
        );
    }
}

StickyBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    enter: PropTypes.string,
    exit: PropTypes.string,
    stickyPosition: PropTypes.oneOf(['top', 'bottom']),
    disabled: PropTypes.bool
};

StickyBar.defaultProps = {
    stickyPosition: 'bottom'
};

module.exports = StickyBar;
