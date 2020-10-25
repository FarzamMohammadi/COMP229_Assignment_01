// COMP229_Assignment_01, Farzam Mohammadi Assad, 301109706, Oct/09/2020

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* 2nd function to GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

// GET route for displaying Login page
router.get('/login', indexController.displayLoginPage);

// POST route for processing the Login page 
router.post('/login', indexController.processLoginPage);

// GET route for displaying Register page
router.get('/register', indexController.displayRegisterPage);

// POST route for processing the Register page 
router.post('/register', indexController.processRegisterPage);

// GET to perform User Logout 
router.get('/logout', indexController.performLogout);

module.exports = router;
