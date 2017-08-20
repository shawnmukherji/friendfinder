var friendData = require('../data/friends.js');
var path = require('path');

var totalDifference = 0;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });


    app.post('api/friends', function(req, res){

        var goodMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };

        var userData = req.body
        var userName = userData.name;
        var userImage = userData.image;
        var userScores = userData.scores;

        var totalDifference = 0;

        //loop to cycle through friends scores

        for(var i = 0; i < [friends].length-1; i++){
            console.log(friends[i].name);
            totalDifference = 0;


        for(var f = 0;  f < 10; f++){
            totalDifference += Math.abs(parseInt(userScores[f]) - parseInt(friends[i].scores[i]));

            if(totalDifference <= goodMatch.friendDifference){

                goodMatch.name = friends[i].name;
                goodMatch.photo = friends[i].photo;
                goodMatch.matchDifference = totalDifference;
            }
        }
     }
     friends.push(userData);

     res.json(goodMatch);

    });
};