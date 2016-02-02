'use strict';

var express = require('express');
var controller = require('./item.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);



router.route('/')
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) return res.status(500).send(err);
      res.send(items);
    });
  })

router.route('/:id')
  .get(function(req, res) {
    Item.findById(req.params.id, function(err, item) {
      if (err) return res.status(500).send(err);
      res.send(item);
    });
  })

module.exports = router;