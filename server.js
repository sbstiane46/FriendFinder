var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 8080;

// application/json parse
var jsonParser = bodyParser.json()

// application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/**json"}))

// parse custom things into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom_type" }))

// parse HTML body into a string
app.use(bodyParser.text({ type: "text/html" }))

require("./app/routing/htmlRoutes.js")(app);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
