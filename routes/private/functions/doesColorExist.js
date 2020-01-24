const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Color = require('../../../models/Color');

function doesColorExist(colorId, res, callback) {
  Color.findOne({ _id: ObjectId(colorId) })
  .exec((err, color) => {
    if (err) return res.json({ message: 'An error occured' });
    else if (!color) return res.json({ message: 'The provided color does not exist' });
    return callback();
  });
}

module.exports = doesColorExist;
