let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'Home'});
}

/* 2nd function to GET home page. */
module.exports.displayHomePage = (req, res, next) =>{
    res.render('home', { title: 'Home' });
}
  /* GET About Me page. */
  module.exports.displayAboutPage = (req, res, next) =>{
    res.render('about', { title: 'About' });
}
  /* GET Projects page. */
  module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('projects', { title: 'Projects' });
}
  /* GET Services page. */
  module.exports.displayServicesPage = (req, res, next) =>{
    res.render('services', { title: 'Services' });
}
  /* GET Contact Me page. */
  module.exports.displayContactPage = (req, res, next) =>{
    res.render('contact', { title: 'Contact Us' });
}