var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('admin', {
    title : "Admin Panel - QGEC",
    description: "Admin Panel"
  });
});

module.exports = router;