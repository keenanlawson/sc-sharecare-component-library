import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import CardHeader from '../CardHeader/CardHeader';
import CardText from '../CardText/CardText';
import CardFooter from '../CardFooter/CardFooter';
import CardFooterLink from '../CardFooterLink/CardFooterLink';

const SimpleCard = ({ children, title, subtitle, text, linkTo, linkLabel, ...props }) => {
    return (
        <Card {...props}>
            {
                title &&
                <CardHeader title={title} simple/>
            }
            {
                (subtitle || text) &&
                <CardText subtitle={subtitle} text={text}/>
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
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ])
};

SimpleCard.defaultProps = {};

// export default SimpleCard;
module.exports = SimpleCard;
