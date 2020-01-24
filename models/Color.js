const mongoose = require('mongoose');

const colorScheme = new mongoose.Schema({
  hex: {
    type: String,
    required: true
  }
});

const Color = mongoose.model('Color', colorScheme);

module.exports = Color;
