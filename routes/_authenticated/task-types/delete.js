const express = require('express');
const router = express.Router();
const passport = require('passport');

const Task = require('../../../models/Task');
const TaskType = require('../../../models/TaskType');
const getAllTypes = require('../../sharedFunctions/getAllTypes');

router.post('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {

    if (err) {
      return res.json({ message: 'an error occured' });
    }

    // WORKING ON IT

    else if (user) {
      const userId = user._id;
      const typeId = req.body.id;

      TaskType.findOne({ _id: typeId }, (err, found) => {
        if (found) {
          console.log(found);
          if (userId.equals(found.author)) {
            Task.find({ taskType: typeId }, (err, found) => {
              //console.log(found);
            });
          }
          // the user does NOT own the type
          const types = getAllTypes();
          return res.json({
            message: 'type not found',
            types: types
          });
        }
        // type does NOT exist
        const types = getAllTypes();
        return res.json({
          message: 'type not found',
          types: types
        });

        /*
        if (userId.equals(found.author)) {
          return console.log('ok its your type :D');
        }
        const types = getAllTypes();
        return res.json({
          message: 'type not found',
          types: types
        });
        */
      });

      /*
      // in future check if the tasks the user would
      // like to get/add/delete are his/her
      // even if it exists but its not his/her then display 'doesn't exist
      Task.find({ taskType: id }, (err, found) => {
        if (!found) {
          TaskType.findOneAndDelete({ _id: id }, (err, deleted) => {


            if (deleted) {
              TaskType.find({
                author: user._id
              }, (err, types) => {
                const convertedTypes = convertTypes(types);
                return res.json({
                  message: 'success',
                  types:
                });
              });
            }
            return res.json({
              message: 'type doesnt exist',
            });


          });
        }
        return res.json({ message: 'type in use' });
      });

      TaskType.find({
        author: user._id
      }, (err, types) => {
        const convertedTypes = convertTypes(types);
        // i think it may return tasks & 'success' even if error occured
        return res.json({
          message: 'success',
          types: convertedTypes
        });
      });
      */

      /*
      TaskType.findOneAndDelete({
        author: user._id,
        _id: req.body.typeId
      }, (err, deleted) => {
        TaskType.find({}, (err, found) => {
          return res.json({
            deleted_type: deleted,
            all_types: found
          });
        });
      });
      */

      /*
      TaskType.create({
        author: user._id,
        name: req.body.name,
        color: req.body.color
      }, (err, created) => {
        TaskType.find({}, (err, found) => {
          return res.json({
            added_type: created,
            all_types: found
          });
        });
      });
      */

      /*
      Task.find({
        author: user._id,
        end: { $gt: startOfToday },
        start: { $lt: endOfToday }
      })
      .populate('taskType')
      .exec((err, tasks) => {
        const tasksForClient = convertTasks(tasks);
        // i think it may return tasks & 'success' even if error occured
        res.json({
          message: 'success',
          date: startOfToday,
          tasks: tasksForClient
        });
      });
      */
    }

    else return res.json({ message: 'failure' });

  })(req, res, next);
});

module.exports = router;
