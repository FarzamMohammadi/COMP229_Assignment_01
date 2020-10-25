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