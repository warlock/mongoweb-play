var express = require('express');
var router = express.Router();
var Model = require('../model/model');
var Product = Model.product;

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/list', function(req, res) {
  Product.find({}, function(req, doc) {
    console.log(doc);
  });
  res.send("llistant producte");
});

router.get('/new', function(req, res) {
  var producte = new Product({name: "Producte nou"});
  producte.save(function (err) {
    if (err) return handleError(err);
  });
  res.send("creat nou producte");
});


module.exports = router;
