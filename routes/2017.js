var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('previous/2017', {
        previous : 'active', // Add 'active' class to nav
        sixteen : 'active', // Add 'active' class to nav
        title : "QGEC 2017",
        description: "QGEC 2017"
    });
});

module.exports = router;