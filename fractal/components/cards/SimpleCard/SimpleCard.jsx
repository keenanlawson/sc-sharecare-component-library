import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.jsx';
import CardHeader from '../CardHeader/CardHeader.jsx';
import CardText from '../CardText/CardText.jsx';
import CardFooter from '../CardFooter/CardFooter.jsx';
import CardFooterLink from '../CardFooterLink/CardFooterLink.jsx';

const SimpleCard = ({ children, title, subtitle, text, html, linkTo, linkLabel, ...props }) => {
    return (
        <Card {...props}>
            {
                title &&
                <CardHeader title={title} simple/>
            }
            {
                (subtitle || text || html) &&
                <CardText subtitle={subtitle} text={text} html={html}/>
            }
            {children}
            {
                linkTo &&
                <CardFooter>
                    <CardFooterLink to={linkTo} label={linkLabel}/>
                </CardFooter>
            }
        </Card>
    );
};

SimpleCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    linkTo: PropTypes.string,
    linkLabel: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    html: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ])
};

SimpleCard.defaultProps = {};

// export default SimpleCard;
module.exports = SimpleCard;
