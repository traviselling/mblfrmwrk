var mongoose = require('mongoose');
// Define schema

var Schema = mongoose.Schema;

var guestSchema = new Schema({
    room: String,
    bed: String,
    phone: Number,
    address: String,
    arriveDate: Date,
    departureDate: Date,
    paidInFull : Boolean
});

// Compile model from schema
var guestModel = mongoose.model('guestModel', guestSchema );
