const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    require: true,
  },
  accepted: {
    type: Boolean,
    require: true,
  }
}, {
  toJSON: {
    virtuals: true
  }
});

module.exports = mongoose.model('Bid', schema);
