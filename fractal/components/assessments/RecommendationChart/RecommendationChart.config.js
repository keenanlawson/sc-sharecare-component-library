module.exports = {
    "title": "Assessment Recommendation Chart",
    "status": "ready",
    "collated": false,
    "preview": "@recommendation-arc-chart-preview",
    "context": {
        chartData: {
            chartType: 'arc',
            percentFull: 75
        }
    },
    "variants": [
        {"name": "recommendation-bar-chart", "context": {
            chartData: {
                chartType: 'bar',
                percentFull: 75
            }
        }, "preview": "@recommendation-bar-chart-preview"}
    ]
};