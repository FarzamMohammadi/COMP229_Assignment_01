//COMP229_Assignment_02, Farzam Mohammadi Assad, 301109706, Oct/25/2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//Create the USER model instance
let userModel = require('../models/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName: ''});
}

/* 2nd function to GET home page. */
module.exports.displayHomePage = (req, res, next) =>{
    res.render('home', { title: 'Home', displayName: req.user ? req.user.displayName: ''});
}
  /* GET About Me page. */
  module.exports.displayAboutPage = (req, res, next) =>{
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName: '' });
}
  /* GET Projects page. */
  module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName: '' });
}
  /* GET Services page. */
  module.exports.displayServicesPage = (req, res, next) =>{
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName: '' });
}
  /* GET Contact Me page. */
  module.exports.displayContactPage = (req, res, next) =>{
    res.render('contact', { title: 'Contact Us', displayName: req.user ? req.user.displayName: '' });
}

module.exports.displayLoginPage = (req, res, next) =>{
  //check if USER is logged in
  if(!req.user)
  {
    res.render('auth/login', 
    {
      title: "Login",
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName: ''
    });
  }
  else 
  {
    return res.redirect('/');
  }
}

module.exports.processLoginPage = (req, res, next) =>{
  passport.authenticate('local',
  (err, user, info) =>{
    //server err?
    if(err)
    {
      return next(err);
    }
    //is there a user login error?
    if(!user)
    {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }
      req.login(user, (err) =>{
        if(err)
        {
          return next(err);
        }
        return res.redirect('/contacts-list')
      });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) =>{
  if(!req.user)
  {
    res.render('auth/register',
    {
    title: 'Register',
    messages: req.flash('registerMessage'),
    displayName: req.user ? req.user.displayName: ''
    });
  }
  else
  {
    return res.redirect('/');
  }
}

module.exports.processRegisterPage = (req, res, next) =>{
  //instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });
  User.register(newUser, req.body.password, (err) =>{
    if(err)
    {
      console.log("Error: Inserting New User");
      if(err.name == "UserExistsError")
      {
        req.flash(
          'registerMessage',
          'Registration Error: User Already Exists!'
        );
        console.log("Error: User Already Exists!")
      }
      return  res.render('auth/register',
      {
      title: 'Register',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName: ''
      });
    }
    else
    {
      // If no error, Then register, redirect and authenticate

      return passport.authenticate('local')(req, res, () =>{
        res.redirect('/contacts-list');
      });
    }
  })
}

module.exports.performLogout = (req, res, next) =>{
  req.logout();
  res.redirect('/');
}