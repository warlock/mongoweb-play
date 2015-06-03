var express = require('express');
var router = express.Router();
var Model = require('../model/model');
var Product = Model.product;

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
