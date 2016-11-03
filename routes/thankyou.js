var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('thankyou', {
    title : "Thank You",
    description: "Your QGEC Application or Registration was completed successfully."
  });
});

module.exports = router;