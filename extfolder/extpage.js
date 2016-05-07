var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./schema');

var Kitten = mongoose.model('Kitten');

router.get('/', function(req, res)  {
    var thor = new Kitten({
        name: "vipin",
        mobile:9769939005,
        email:"vkyadav998@gmail.com",
        subject:"English",
        type:"uk",
        password:"pass123"
    });

    thor.save(function(err, thor) {
        if (err) return console.error(err);
        console.dir(thor);
    });
    res.json([thor ]);
});

module.exports = router;