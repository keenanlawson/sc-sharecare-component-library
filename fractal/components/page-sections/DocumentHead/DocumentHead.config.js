module.exports = {
    "title": "Document Head",
    "label": "Document Head",
    "status": "ready",
    "order": 1,
    "collated": true,
    "preview": "@document-head-preview",
    "context": {
        currentUrl: 'https://www.sharecare.com/some-sample-url',
        applicationName: 'Sharecare',
        pageTitle: 'Sample Page Title',
        pageDescription: 'Sample page description text.  Anything can go here I guess.',
        keywords: 'wordA wordB wordC',
        noCrawl: false,
        openGraphType: 'Sample OG type',
        openGraphImage: 'https://static.sharecare.com/images/sc_heart.png',
        twitterSiteUsername: 'Xtestsharecare',
        facebookAppId: 114431828656817,
        canonicalUrl: 'https://www.sharecare.com/canonical-sample-url',
        favIconUrl: 'https://www.sharecare.com/component/global/static/images/favicon.ico',
        stylesheetUrls: [
            'https://www.sharecare.com/component/global/static/css/light-sea-green-esi.css',
            'https://www.sharecare.com/component/global/static/css/light-sea-green.css'
        ],
        javascriptUrls: [
            {url: 'https://www.sharecare.com/component/global/static/scripts/common.min.js', async: true},
            {url: 'https://www.sharecare.com/component/global/static/scripts/common.js', defer: true},
        ]
    }
};
