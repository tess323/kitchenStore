'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  copy: String,
  image:String,
  category:String
});

export default mongoose.model('Product', ProductSchema);
