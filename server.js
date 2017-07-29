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

//Users information(DATA)
var friends = [{
    
}]
/* Basic route that sends the user first to the AJAX Page from the htmlRoutes. The get to show the html and css on the website*/
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});