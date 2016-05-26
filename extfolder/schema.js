/**
 * Created by pc on 29-04-2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittySchema = new Schema({
    name: String,
    mobile:Number,
    email:String,
    subject:String,
    type:String,
    password:String,
    date:String
}, {collection:'user'});

mongoose.model('Kitten', kittySchema);

var orderSchema = new Schema({
    uid: String,   //  IF WANT TO PRODUCE objectId of user collection -- {type: Schema.Types.ObjectId, ref: 'user'},
    itom: String,
    type:String,
    address:String,
    pin:Number,
    date:String
}, {collection:'order'});

mongoose.model('corder', orderSchema);
