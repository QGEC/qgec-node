var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        home : 'active', // Add 'active' class to nav
        title : "Queen's Global Energy Conference",
        description: "Welcome to the QGEC Homepage"
    });
});

module.exports = router;