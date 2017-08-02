// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//getting the static css file and img pic
app.use("/assets", express.static(path.join(__dirname, "app/public/assets")));

//getting the javascript that takes in user input and populate the result on the module
app.use("/javascript", express.static(path.join(__dirname, "app/public/javascript")));

/* Basic route that sends the user first to the AJAX Page from the htmlRoutes. The get to show the html and css on the website*/
require("./app/routing/htmlRoutes.js")(app);

//route to the apiRoutes to get the friends array to show.
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});