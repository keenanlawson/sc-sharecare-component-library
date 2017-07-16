module.exports = {
    "title": "Assessment Score",
    "status": "ready",
    "collated": true,
    "preview": "@assessment-score-preview",
    "context": {
        getScore: function() {
            return new Promise((resolve, reject) => {
                resolve({
                    headerText: 'Lorem Ipsum',
                    lastUpdated: '12/34/5678',
                    percentFull: 75
                });
            });
        },
        getScoreSuccess: function(score) {
            return score;
        }
    }
};