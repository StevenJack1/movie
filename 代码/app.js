var express = require('express');
var environment = require('./routes/environment');
var routes = require('./routes/index');
var app = express();
environment(app);
require('./models/ref');
routes(app);
module.exports = app;
