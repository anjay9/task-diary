const express = require('express');
const rootRouter = express.Router();

rootRouter.use('/auth', require('./auth'));
rootRouter.use('/private', require('./private'));

module.exports = rootRouter;
