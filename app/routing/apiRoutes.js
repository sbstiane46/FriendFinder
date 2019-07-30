var surveyData = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });

    app.get("/api/friends", function(req, res) {
    
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        //parse user POST
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        //loop through all friends in database
        for (var i =0; i < friendArray.length; i++) {
            console.log(friendArray[i]);
            totalDifference = 0;

            //we loop through all scores of each friend
            for (var j =0; j < friendArray[i].scores[j]; j++){

            //calculates difference between scores and adds to totalDifference
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]));

            //if sum of differences is less than the difference of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {

                //reset bestMatch to new friend
                bestMatch.name = friendArray[i].name;
                bestMatch.photo = friendArray[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        }
        //save user data to db
        friendArray.push(userData);
        //return a JSON with the user bestMatch
        res.json(bestMatch);
    });
}

