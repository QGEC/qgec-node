var express = require('express');
var router = express.Router();
var models = require('../config/schemas');


var db = require("../config/DB");

router.get('/', function(req, res) {
  res.render('apply', {
    apply : 'active', // Add 'active' class to nav
    title : "Apply to QGEC Events",
    description : "Apply now to participate in one of the highest rated conferences at Queen's University.",
    message: req.flash('applyMessage')
  });
});

router.post('/taster', function(req, res) {
  if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null){
    req.flash('applyMessage', "Please verify that you're not a robot.");
    res.redirect('/apply');
  } else {
    console.log("Creating applicant " + req.body.firstName + " " + req.body.lastName);
    db.createTasterApplicant(req.body.firstName, req.body.lastName, req.body.email, req.body.faculty, req.body.year, req.body.topics, req.body.comments);
    res.redirect('/thankyou');
  }
});

router.post('/delegate', function(req, res) {
  // if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null){
  //   req.flash('applyMessage', "Please verify that you're not a robot.");
  //   res.redirect('/apply');
  // } else {
    models.Delegate.findOne({ email: req.body.email}, function(err, exists) {
      if (err)
        console.log(err);

      if (exists) {
        req.flash('applyMessage', "Seems like you've already applied. Contact us at <a href='mailto:conference@qgec.ca'>conference@qgec.ca</a> if you have any questions.");
        res.redirect('/apply');
      } else {
        console.log("Creating delegate applicant " + req.body.firstName + " " + req.body.lastName);
        db.countDelegateApplicants(function(err, count) {
          db.createDelegateApplicant(req.body.firstName, req.body.lastName, req.body.email, req.body.faculty, req.body.major, req.body.year, req.body.q1, req.body.q2, count);
        });
        res.redirect('/thankyou');
      }
    });
  // }
});

module.exports = router;