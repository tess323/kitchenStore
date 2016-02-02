'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
	Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
  name: String,
  price: Number, 
  copy: String,
  image: String,
  category: String
  
});

export default mongoose.model('Item', ItemSchema);
