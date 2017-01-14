var express = require('express');
var router = express.Router();
var db = require("../config/DB");

router.get('/', checkAuth, function(req, res) {
  res.render('accepted', {
    title : "Queen's Global Energy Conference",
    description: "Congratulations on being accepted as a delegate for QGEC. Please provide additional information, and payment.",
    message : req.flash('furtherInfoMessage'),
    user : req.session.user
  });
});

router.post('/submit', function(req, res) {
  console.log(req.body);
  db.submitAdditionalInfo(req.body.email, req.body.allergies, req.body.roommate, req.body.nineteen);
  res.redirect("/thankyou");
});

function checkAuth(req, res, next) {
  if (!req.session.user) {
    res.redirect("/delegateLogin");
  } else {
    next();
  }
}

module.exports = router;