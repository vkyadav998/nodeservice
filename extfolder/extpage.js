var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./schema');

var Kitten = mongoose.model('Kitten');

router.get('/', function(req, res)  {
    var thor = new Kitten({
        name: "vipinkumar",
        subject:"hindi",
        type:11
    });

    thor.save(function(err, thor) {
        if (err) return console.error(err);
        console.dir(thor);
    });
    res.json({ message: thor });
});
module.exports = router;
