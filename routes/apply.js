var express = require('express');
var router = express.Router();

var db = require("../config/DB");

router.get('/', function(req, res) {
  res.render('apply', {
    apply : 'active', // Add 'active' class to nav
    title : "Apply to QGEC - Delegates",
    description : "Apply now to participate in one of the highest rated conferences at Queen's University.",
  });
});


router.post('/taster', function(req, res) {
  console.log("Creating applicant " + req.body.firstName + " " + req.body.lastName);
  db.createTasterApplicant(req.body.firstName, req.body.lastName, req.body.email, req.body.faculty, req.body.year, req.body.topics, req.body.comments);
  res.redirect('/thankyou');
});

module.exports = router;