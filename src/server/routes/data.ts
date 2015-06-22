/// <reference path="../../../vendortypescripts/node/node.d.ts"/>
/// <reference path="../../../vendortypescripts/express/express.d.ts"/>
import express = require('express');
import api = require('../modules/api');

var router = express.Router();

router.get('/products/:productName', function(req, res, next) {
  var wr = new api.Fda();
  wr.Products(req.params.productName, function(body){res.json(body);});
});

router.get('/product/:id', function(req, res, next) {
  var wr = new api.Fda();
  wr.Product(req.params.id, function(body){res.json(body);});
});

router.get('/ingredient/:ingredientName', function(req, res, next) {
  var wr = new api.Fda();
  wr.Ingredient(req.params.ingredientName, function(body){res.json(body);});
});

router.get('/purpose/:purpose', function(req, res, next) {
  var wr = new api.Fda();
  wr.Purpose(req.params.purpose, function(body){res.json(body);});
});
router.get('/purposeWithQuery/:purpose', function(req, res, next) {
  var wr = new api.Fda();
  wr.Purpose(req.params.purpose, function(body){
    body = '{"q": "' + req.params.purpose + '", "d": ' + body + '}';
    res.json(body);
  });
});

router.get('/purposeWithoutIngredient/:purpose/:ingredient', function(req, res, next) {
  var wr = new api.Fda();
  wr.PurposeWithoutIngredient(req.params.purpose, req.params.ingredient, function(body){res.json(body);});
});

module.exports = router;