var path = require("path");
//getting information from the friends.js file
var friends = require("../data/friends.js");
// Create New friends - takes in JSON input
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
    
// We then add the json the user sent to the friends array in the friends.js file.
    friends.push(newFriends);
    
    
})
};
