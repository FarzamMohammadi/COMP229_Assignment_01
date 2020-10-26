//COMP229_Assignment_02, Farzam Mohammadi Assad, 301109706, Oct/25/2020
let mongoose = require('mongoose');

//create model class
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: Number
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactModel);