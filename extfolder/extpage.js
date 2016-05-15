var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./schema');

var Kitten = mongoose.model('Kitten');

router.get('/', function(req, res)  {
    Kitten.find({}, function (err, docs){
        if(err){
            console.log(err);
        }
        res.json(docs);
        console.log("user : " + docs);
    });
});

router.post('/vk', function(req, res)  {
    var check=req.body;

    Kitten.findOne({'email':check.email},function (err, docs){
        if(err){
            console.log(err);
        }
        res.json(docs);
        console.log("user : " + docs);
    });
});

router.post('/', function(req, res){
    var user =req.body;
    console.log("request = " + req.body);
    var user = new Kitten(user);
    user.save(function(err, user) {
        if (err) return console.error(err);
        console.dir(user);
    });
    res.json([user ]);
});

module.exports = router;
