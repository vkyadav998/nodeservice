var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/testdatabase');

var router = express.Router();
var secpage = require('./extfolder/extpage');

app.use('/api', secpage);

app.get('/', function(req, res) {
    res.json({ message: 'Application is running here. hit on [ /api ] to connect database.' });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});