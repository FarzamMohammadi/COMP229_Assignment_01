let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let contactController = require('../controllers/businessContacts');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// GET route for the business contacts list - READ operation
router.get('/', contactController.displayBusinessList);

// GET route for displaying add page - CREATE operation
router.get('/add', requireAuth, contactController.displayAddPage);

// POST route for processing the add page - CREATE operation
router.post('/add', requireAuth, contactController.processAddPage);

// GET route for displaying the edit page - UPDATE operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// POST route for processing the edit page - UPDATE operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// GET to perform deletion - DELETE operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;