let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to 'Book' model
let Book = require('../models/book');

let bookController = require('../controllers/book')

// GET route for the Book list - READ operation
router.get('/', bookController.displayBookList);

// GET route for displaying add page - CREATE operation
router.get('/add', bookController.displayAddPage);

// POST route for processing the add page - CREATE operation
router.post('/add', bookController.processAddPage);

// GET route for displaying the edit page - UPDATE operation
router.get('/edit/:id', bookController.displayEditPage);

// POST route for processing the edit page - UPDATE operation
router.post('/edit/:id', bookController.processEditPage);

// GET to perform deletion - DELETE operation
router.get('/delete/:id', bookController.performDelete);

module.exports = router;