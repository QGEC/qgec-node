var express = require('express');
var router = express.Router();

var db = require("../config/DB");

var auth = require("http-auth");
var basic = auth.basic({
    realm: "Web."
  }, function (username, password, callback) { // Custom authentication method.
    callback(username === "qgec" && password === "Energy1617");
  }
);

router.get('/', auth.connect(basic), function(req, res) {

  db.getDelegateApplicants(function(err, delegates) {
    db.countDelegateApplicants(function(err, dCount){
      db.getTasterApplicants(function(err, tasters) {
        db.countTasterApplicants(function(err, tCount){
          res.render('admin', {
            title         : "Admin Panel - QGEC",
            description   : "Admin Panel",
            taster        : tasters,
            tasterCount   : tCount,
            delegate      : delegates,
            delegateCount : dCount
          });
        });
      });
    });
  });

});

router.post('/accept/delegate', function(req, res) {
  console.log("Accept " + req.body.delegateID);
  db.acceptDelegateApplicant(req.body.delegateID);
  res.redirect('/admin');
});

router.post('/delete/delegate', function(req, res) {
  console.log("Delete " + req.body.delegateID);
  db.deleteDelegateApplicant(req.body.delegateID);
  res.redirect('/admin');
});

router.post('/delete/taster', function(req, res) {
  console.log("Delete " + req.body.tasterID);
  db.deleteTasterApplicant(req.body.tasterID);
  res.redirect('/admin');
});

module.exports = router;