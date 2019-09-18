/*
@author: Micah Andres
@github: mandres2
@comment: Homework 13 - Pet Finder Express Node app
*/

// Node Dependencies / npm Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// These variables are established to link in HTML and API routes
const apiRoutes = require('./app/routing/api-routes.js');
const htmlRoutes = require('./app/routing/html-routes.js');

// Set up Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Server Routing Map
apiRoutes(app); // API route - Must be listed first due to the HTML default catch all "use" route
htmlRoutes(app); // HTML route

// Listener - Start our server so that it can begin listening to client request.
app.listen(PORT, function() {
  // Log (server-side) when the server has started
  console.log("App listening on PORT: " + PORT);
  console.log("Server listening on: http://localhost:" + PORT);
});