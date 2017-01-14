var express = require('express');
var router = express.Router();
var models = require('../config/schemas');

var db = require("../config/DB");

router.get('/', function(req, res) {
  res.render('delegateLogin', {
    title : "Queen's Global Energy Conference",
    description : "Login to your Delegate profile",
    message : req.flash('loginMessage')
  });
});

router.post('/', function(req, res) {
  console.log("logging in " + req.body.email);
  
  models.Delegate.findOne({ 'email' : req.body.email }, function(err, user) {
    if (err) throw err;

    if (!user) {
      req.flash('loginMessage', 'A delegate application by that email could not be found.<br>If you have forgotten the email you used to apply, please email us at <a href="mailto: conference@qgec.ca">conference@qgec.ca</a> to retrieve it.');
      res.redirect('/delegateLogin');
    } else if (user.accepted === false) {
      req.flash('loginMessage', 'That email exists, but your application has not yet been accepted.<br>Please email us at <a href="mailto: conference@qgec.ca">conference@qgec.ca</a> if you think there is an error.');
      res.redirect('/delegateLogin');
    } else {
      req.session.user = user;
      res.redirect('/accepted');
    }
  });
});

module.exports = router;