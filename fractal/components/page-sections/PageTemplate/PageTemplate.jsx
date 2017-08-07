import React from 'react';
import PropTypes from 'prop-types';

import DocumentHead from '../DocumentHead/DocumentHead.jsx';
import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteHeader from '../SiteHeader/SiteHeader.jsx';
import SiteFooter from '../SiteFooter/SiteFooter.jsx';

const PageTemplate = (props) => {

    // Expand props

    // Set class names
    const esiClass = 'sharecare-esi';

    // Extend class names

    // Compose props
    const documentHeadProps = {};



    // Render
    return (
        <html lang="en" xmlns="" className="">
            <DocumentHead {...documentHeadProps}/>
            <body>
                <SiteHeader {...props} className={esiClass}/>
                <main>
                    <PageLayer>XXX page content XXX</PageLayer>
                </main>
                <SiteFooter className={esiClass}/>
            </body>
        </html>
    );
};

PageTemplate.propTypes = {
    breadcrumbs: PropTypes.oneOfType([
        PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
        }),
        PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
        }))
    ])
};

PageTemplate.defaultProps = {};

// export default PageTemplate;
module.exports = PageTemplate;
