const express = require('express');
const router = express.Router();
const userDao = require('../dao/users-dao');
const {promiseGetResponse, promisePostResponse, checkSession} = require('./ctrls');
const bcrypt = require('bcrypt');

/**
 * @swagger
 * /user:
 *  get:
 *    description: Retrieve User Info
 *    tags:
 *       - user
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: get user's own profile
 */
router.get('/', function (req, res, next) {
  const username = checkSession(req, res);
  console.log({username});
  if ( username )
    promiseGetResponse(userDao.retrieve(username), res, 200);
});

module.exports = router;