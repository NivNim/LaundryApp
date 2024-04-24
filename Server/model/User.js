const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});

// Remove the redundant unique index for email
// userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('laundry', userSchema);

module.exports = User;
