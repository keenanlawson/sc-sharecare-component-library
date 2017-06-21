module.exports = {
    "title": "SVG Arc Chart",
    "status": "ready",
    "collated": true,
    "preview": "@svg-arc-chart-preview",
    "context": {
        "percentFull": 95
    },
    "variants": [
        {"name": "svg-arc-chart-zero", "context": {
            "percentFull": 0
        }},
        {"name": "svg-arc-chart-veryLow", "context": {
            "percentFull": 5
        }},
        {"name": "svg-arc-chart-low", "context": {
            "percentFull": 20
        }},
        {"name": "svg-arc-chart-average", "context": {
            "percentFull": 40
        }},
        {"name": "svg-arc-chart-high", "context": {
            "percentFull": 65
        }},
        {"name": "svg-arc-chart-veryHigh", "context": {
            "percentFull": 90
        }},
        {"name": "svg-arc-chart-full", "context": {
            "percentFull": 100
        }}
    ]
};