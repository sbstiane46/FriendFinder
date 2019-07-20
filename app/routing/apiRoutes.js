var surveyData = require("../data/friends");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(surveyData);
    });
    app.post('/api/friends', function(req, res) {
        
    }
    )
}