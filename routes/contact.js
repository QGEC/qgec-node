var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('contact', {
        contact : 'active', // Add 'active' class to nav
        title : "Contact QGEC",
        description: "Reach out to QGEC organizers"
    });
});

module.exports = router;