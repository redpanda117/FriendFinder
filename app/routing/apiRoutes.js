var path = require("path");
//getting information from the friends.js file
var friends = require("../data/friends.js");
// Create New friends - takes in JSON input

//the starting value of the calculated score
var totalDiff = 0;
//an array that holds all of the calculaed score.
var calcDiff =[];

module.exports = function (app) {

// Get all friends information to show
    app.get("/api/friends", function (req, res) {
//go through the file pathing to the friends list to get the information
        res.sendFile(path.join(__dirname, "../data/friends.js"))
//show all the friends list        
        res.json(friends);
    });

app.post("/api/friends", function (req, res) {
// req.body hosts is equal to the JSON post sent from the user
var newFriends = req.body;
//a loop going through the friends array
    for(var i = 0; i < friends.length; i++){
//inputing info through the function to calculate the difference in the user and each friends score. 
        totalDifference(newFriends.scores,friends[i].scores);
//making sure the calculation is working and is properly looping through each friends 
        console.log(totalDiff);        
//reseting the value to totalDiff to propery calculate the next friend in the friends array.
        totalDiff = 0;    
    }  
    
//function that goes through user scores and friends scores and calculate the difference.

    function totalDifference(userScore,friends){
//a loop going through just the scores of the friends and user scores.     
        for(var j = 0; j< userScore.length; j++){
//the calculation of the difference of the user and friends.
        totalDiff += Math.abs(parseInt(userScore[j])- parseInt(friends[j]));
        }
        return totalDiff;
        }

// We then add the json the user sent to the friends array in the friends.js file.So it will show up in the /api/friends.
    friends.push(newFriends);
    
    
})

};
