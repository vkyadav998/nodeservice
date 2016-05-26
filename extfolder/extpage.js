var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./schema');

var Kitten = mongoose.model('Kitten');
var corder = mongoose.model('corder');


router.get('/', function(req, res)  {
    Kitten.find({}, function (err, docs){
        if(err){
            console.log(err);
        }
        res.json(docs);
        console.log("user : " + docs);
    });
});

router.get('/vk', function(req, res)  {
    var check=req.query;

    Kitten.findOne({'email':check.email},function (err, docs){
        if(err){
            console.log(err);
        }
        else{
            res.json(docs);
        }
        console.log("user : " + docs);
    });
});

router.post('/', function(req, res){
    var user =req.body;
    var user = new Kitten(user);
    user.save(function(err, user) {
        if (err) return console.error(err);
        console.dir(user);
    });
    res.json([user ]);
});

router.get('/placeorder',function (req,res) {

    console.log(req);
    var myorder_id=req.query;
    corder.find({"uid" :(myorder_id.uid)},function(err,docs) { //if we want to query by objectid than  -- mongoose.Types.ObjectId(myorder_id._id)
        if(err){
            console.log(err);
        }
        res.json(docs);
    });
});

router.post('/placeorder',function (req,res) {
    var order =req.body;
    var vipin = new corder(order);
    vipin.save(function(err, order) {
        if (err) return console.error(err);
        console.dir(order);
    });
    res.json([order ]);
});

module.exports = router;
