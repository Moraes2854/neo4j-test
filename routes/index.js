const express = require('express');

const personRouter = require('./person.router');


function routerApi ( app ) {
  const router = express.Router();
  app.use('/', router);
  router.use('/persons', personRouter);
}

module.exports = routerApi;
