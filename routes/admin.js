var express = require('express');
var router = express.Router();

var db = require("../config/DB");

router.get('/', function(req, res) {
  db.getTasterApplicants(function(err, tasters) {
    res.render('admin', {
      title : "Admin Panel - QGEC",
      description: "Admin Panel",
      taster : tasters
    });
  });
});

router.post('/delete/taster', function(req, res) {
  console.log("Delete " + req.body.tasterID);
  db.deleteTasterApplicant(req.body.tasterID);
  res.redirect('/admin');
});

module.exports = router;