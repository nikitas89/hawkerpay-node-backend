const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const hawkerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a hawker name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  address:String,
  menu:[{item:String, quantity:Number, price:Number}] //change to obj price and name
});

hawkerSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  next();
  // TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model('Hawker', hawkerSchema);
