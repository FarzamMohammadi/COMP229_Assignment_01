// COMP229_Assignment_01, Farzam Mohammadi Assad, 301109706, Oct/09/2020

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
