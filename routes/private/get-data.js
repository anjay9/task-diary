const express = require('express');
const router = express.Router();

const checkPassed = require('./functions/checkPassed');
const sendData = require('./functions/sendData');

router.post('/', (req, res, next) => {
  const options = { pageDate: true };
  checkPassed(options, req, res, () => {
    const { userId } = req;
    const { pageDate } = req.body;
    sendData(userId, pageDate, res);
  });
});

module.exports = router;
