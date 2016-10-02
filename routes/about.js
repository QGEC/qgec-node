var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('about', {
        about : 'active', // Add 'active' class to nav
        title : "About QGEC",
        description: "About Queen's Global Energy Conference"
    });
});

module.exports = router;