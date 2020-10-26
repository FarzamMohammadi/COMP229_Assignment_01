//COMP229_Assignment_02, Farzam Mohammadi Assad, 301109706, Oct/25/2020

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
