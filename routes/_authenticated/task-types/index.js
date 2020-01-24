const express = require('express');
const router = express.Router();

router.use('/get', require('./get'));
router.use('/add', require('./add'));
router.use('/delete', require('./delete'));

module.exports = router;
