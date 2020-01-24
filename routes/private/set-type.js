const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const checkPassed = require('./functions/checkPassed');
const doesColorExist = require('./functions/doesColorExist');
const TaskType = require('../../models/TaskType');
const sendData = require('./functions/sendData');

router.post('/', (req, res, next) => {
  const options = { pageDate: true, setType: true };
  checkPassed(options, req, res, () => {
    const { userId } = req;
    const { pageDate, setType } = req.body;
    const { typeId, name, colorId } = setType;
    doesColorExist(colorId, res, () => {
      if (!typeId) {
        return TaskType.create({ author: userId, name, color: colorId }, (err, createdType) => {
          if (err) return res.json({ message: 'An error occurred' });
          return sendData(userId, pageDate, res);
        });
      }
      TaskType.findOneAndUpdate(
        { _id: ObjectId(typeId), author: userId },
        { name, color: colorId },
        { new: true })
      .exec((err, updatedType) => {
        if (err) return res.json({ message: 'An error occured' });
        if (!updatedType) return res.json({ message: 'This task type does not exist' });
        return sendData(userId, pageDate, res);
      });
    });
  });
});

module.exports = router;
