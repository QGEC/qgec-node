//------------------------------------------------------------------------------
// QGEC Website
// app.js
//------------------------------------------------------------------------------
var express = require('express');
var cfenv = require('cfenv'); // cfenv provides access to your Cloud Foundry environment, for more info, see: https://www.npmjs.com/package/cfenv
var ejs = require('ejs');
var bodyParser = require('body-parser');

// create a new express server
var app = express();
var appEnv = cfenv.getAppEnv(); // get the app environment from Cloud Foundry

app.set('view engine', 'ejs'); // set ejs as the rendering engine

// Serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/****************** routes ********************************/

var index = require('./routes/index');
var about = require('./routes/about')
var apply = require('./routes/apply'); 
var contact = require('./routes/contact');
var sixteen = require('./routes/2016');


app.use('/', index);
app.use('/about', about);
app.use('/apply', apply);
app.use('/contact', contact);
app.use('/2016', sixteen);

// start server
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
