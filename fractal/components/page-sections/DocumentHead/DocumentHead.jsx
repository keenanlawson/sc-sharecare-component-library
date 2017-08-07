import React from 'react';
import PropTypes from 'prop-types';

const DocumentHead = (props) => {

    // Expand props
    const {
        currentUrl,
        applicationName,
        pageTitle,
        pageDescription,
        keywords,
        noCrawl,
        openGraphType,
        openGraphImage,
        twitterSiteUsername,
        facebookAppId,
        canonicalUrl,
        favIconUrl,
        stylesheetUrls,
        javascriptUrls
    } = Object.assign({}, DocumentHead.defaultProps, props);

    // Set class names

    // Extend class names

    // Compose props

    // Build stylesheet links
    const stylesheets = Array.isArray(stylesheetUrls) ? stylesheetUrls.map((stylesheetUrl) => {
        return <link rel="stylesheet" href={stylesheetUrl} key={stylesheetUrl}/>;
    }) : !!stylesheetUrls ? <link rel="stylesheet" href={stylesheetUrls}/> : null;

    // Build JavaScript links
    let javaScripts = null;
    if (Array.isArray(javascriptUrls)) {
        javaScripts = javascriptUrls.map((javascriptUrl) => {
            const { url, async, defer } = javascriptUrl;
            const loadStyle = defer ? {defer} : async ? {async} : {defer};
            return <script src={url} {...loadStyle} key={url}/>;
        });
    } else if (javascriptUrls) {
        const { url, async, defer } = javascriptUrls;
        const loadStyle = defer ? {defer} : async ? {async} : {defer};
        javaScripts = <script src={url} {...loadStyle}/>;
    }

    // Render
    return (
        <head prefix="og: http://ogp.me/ns# Sharecare:http://ogp.me/ns/apps/Sharecare#">
            <meta charSet="utf-8"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>

            <title>{pageTitle} - {applicationName}</title>
            <meta name="title" content={pageTitle}/>
            <meta name="description" content={pageDescription}/>
            <meta name="keywords" content={keywords}/>
            <meta name="language" content="en"/>

            <meta property="og:type" content={openGraphType}/>
            <meta property="og:title" content={pageTitle}/>
            <meta property="og:image" content={openGraphImage}/>
            <meta property="og:description" content={pageDescription}/>
            <meta property="og:url" content={currentUrl}/>
            <meta property="og:site_name" content={applicationName}/>

            <meta name="twitter:site" content={twitterSiteUsername}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={pageTitle}/>
            <meta name="twitter:description" content={pageDescription}/>
            <meta name="twitter:image" content={openGraphImage}/>

            <meta property="fb:app_id" content={facebookAppId}/>

            {
                noCrawl &&
                <meta name="robots" content="noindex, follow"/>
            }

            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

            <link rel="icon" type="image/ico" href={favIconUrl}/>
            <link rel="shortcut icon" type="image/ico" href={favIconUrl}/>
            <link rel="canonical" href={canonicalUrl ? canonicalUrl : currentUrl}/>

            {stylesheets}
            {javaScripts}
        </head>
    );
};

DocumentHead.propTypes = {
    currentUrl: PropTypes.string,
    applicationName: PropTypes.string,
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string,
    keywords: PropTypes.string,
    noCrawl: PropTypes.bool,
    openGraphType: PropTypes.string,
    openGraphImage: PropTypes.string,
    twitterSiteUsername: PropTypes.string,
    facebookAppId: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
    ),
    canonicalUrl: PropTypes.string,
    favIconUrl: PropTypes.string,
    stylesheetUrls: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.arrayOf(PropTypes.string)]
    ),
    javascriptUrls: PropTypes.oneOfType([
        PropTypes.shape({url: PropTypes.string, async: PropTypes.bool, defer: PropTypes.bool}),
        PropTypes.arrayOf(PropTypes.shape({url: PropTypes.string, async: PropTypes.bool, defer: PropTypes.bool}))]
    )
};

DocumentHead.defaultProps = {
    noCrawl: false
};

// export default DocumentHead;
module.exports = DocumentHead;
