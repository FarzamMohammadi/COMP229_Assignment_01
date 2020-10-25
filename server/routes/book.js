let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let bookController = require('../controllers/book');

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

// GET route for the Book list - READ operation
router.get('/', bookController.displayBookList);

// GET route for displaying add page - CREATE operation
router.get('/add', requireAuth, bookController.displayAddPage);

// POST route for processing the add page - CREATE operation
router.post('/add', requireAuth, bookController.processAddPage);

// GET route for displaying the edit page - UPDATE operation
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

// POST route for processing the edit page - UPDATE operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

// GET to perform deletion - DELETE operation
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;