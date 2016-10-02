var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('previous/2016', {
        previous : 'active', // Add 'active' class to nav
        sixteen : 'active', // Add 'active' class to nav
        title : "QGEC 2016",
        description: "QGEC 2016"
    });
});

module.exports = router;