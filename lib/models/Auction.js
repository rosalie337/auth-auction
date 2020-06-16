const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,
    maxlength: 350
  },
  quantity: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  }
}, {
  toJSON: {
    virtuals:true
  }
});

schema.virtual('Bid', {
  ref: 'Bid',
  localField: '_id',
  foreignField: 'auction'

});

module.exports = exports.model('Auction', schema);

