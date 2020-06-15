const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
  email: {
    type: String,
    require: true,  
  },
  passwordHash: {
    type: String,
    required: true,
  }
}, {
  toJSON: {
    virtual: true,
    transform: (doc, ret) => {
      delete ret.id;
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
});

schema.virtual('password').set(function(password) {
  this.passwordHash = bcrypt.hashSync(password, +process.env.SALT_ROUNDS || 14);
});
 
schema.statics.authorized = function(email, password) {
  return this.findOne({ email })
    .then(user => {
      if(!user) {
        throw new Error('Invalid Email/Password');
      }
      if(!user.compare(password)) {
        throw new Error('Invalid Email/Password');
      }
      return user;
    });
};

schema.methods.compare = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = exports.model('User', schema);
