//COMP229_Assignment_02, Farzam Mohammadi Assad, 301109706, Oct/25/2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to 'Business Contact' model
let Contact = require('../models/businessContacts');

module.exports.displayBusinessList = (req, res, next) => {
   
    Contact.find((err, contactsList123) =>{
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            //Sorting the list by alphabetical order
            let contactsList = contactsList123.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })

            res.render('businessContacts/list', {title: 'Business Contacts', contactsList,
             displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.displayAddPage = (req, res, next) =>{
    res.render('businessContacts/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''});
};

module.exports.processAddPage = (req, res, next) =>{
    let newContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,

    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            //refresh list by redirec
            res.redirect('/contacts-list');
        }
    });
};

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err); 
        }
        else
        {
            //show edit view
            res.render('businessContacts/edit', {title: 'Edit Contact', contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number,
    });

    Contact.updateOne({_id: id}, updatedContact, (err) =>{
    if(err)
    {
        console.log(err)
        res.end(err)
    }
    else 
    {
        //refresh list
        res.redirect('/contacts-list');
    }
    });
};

module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
    if(err)
    {
        console.log(err)
        res.end(err)
    }
    else 
    {
        //refresh list
        res.redirect('/contacts-list');
    }
    });
};
