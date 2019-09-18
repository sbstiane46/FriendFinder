var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

// application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/**json"}))

// parse custom things into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom_type" }))

// parse HTML body into a string
app.use(bodyParser.text({ type: "text/html" }))



require("./app/routing/html-routes.js")(app);


require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
