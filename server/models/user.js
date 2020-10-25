//require modules for the USER model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            defualt: '',
            trim: true,
            required: 'username is required'
        },
        /* 
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password'
        }, 
        */
       email:
       {
           type: String,
           default: '',
           trim: true,
           required: 'email is required'
       },
       displayName:
       {
           type: String,
           default: '',
           trim: true,
           required: 'Display Name is required'
       },
       created:
       {
           type: Date,
           default: Date.now,
       },
       update:
       {
           type: Date,
           default: Date.now,
       }
       
    },
    {
        collection: "users"
    }
);
//configure options for USER model

let options = ({missingPasswordError: 'Wrong/ Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);