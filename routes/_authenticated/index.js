const express = require('express');
const router = express.Router();

router.use('/task-types', require('./task-types'));
router.use('/tasks', require('./tasks'));

module.exports = router;
