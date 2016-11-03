var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        home : 'active', // Add 'active' class to nav
        title : "Queen's Global Energy Conference",
        description: "QGEC, otherwise known as the Queen's Global Energy Conference, is a two day conference held in Kingston Ontario that informs its delegates of current trends in the energy industry through a series of speakers, presentations, and case study workshops."
    });
});

module.exports = router;