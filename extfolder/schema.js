/**
 * Created by pc on 29-04-2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittySchema = new Schema({
    name: String,
    subject:String,
    type:Number
}, {collection:'userrrr'});

mongoose.model('Kitten', kittySchema);
