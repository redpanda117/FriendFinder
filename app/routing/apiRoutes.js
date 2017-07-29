var path = require("path");

// Create New friends - takes in JSON input
module.export = function (app) {
    app.get("/api/friends", function (req, res {
 res.sendFile(path.join(__direname,"/../data/friends.js"))
    }));
   app.post("/api/friends",function(req,res){
      
   }) 
};
