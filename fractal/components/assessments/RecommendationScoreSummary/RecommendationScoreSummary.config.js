module.exports = {
    "title": "Assessment Recommendation Score Summary",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-score-summary-preview",
    "context": {
        bodyContent: `<h3>Lorem Ipsum: Very Low</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
        title: 'Lorem Ipsum',
        uri: 'lorem-ipsum',
        chartData: {
            chartType: 'arc',
            percentFull: 75
        },
        scoresData: [
            {uri: 'a', label: 'Liquidity', value: '1.23 months'},
            {uri: 'b', label: 'Debt-to-Income-Ratio', value: '12.34%'},
            {uri: 'c', label: 'Savings', value: '12.34%'},
            {uri: 'd', label: 'Life Insurance', value: 'Needs fully met'}
        ]
    }
};