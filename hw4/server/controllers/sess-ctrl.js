const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /sess/check:
 *  get:
 *    security:
 *      - mySession: []
 *    description: Check whether valid session
 *    tags:
 *      - sess
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: valid session
 */
router.get('/check', function (req, res) {
  console.log(req.mySession);
  console.log("session check");
  if (req.mySession.username)
    res.status(200).send({valid: true, username: req.mySession.username});
  else
    res.status(401).send({valid: false});
});


/**
 * @swagger
 * /sess/logout:
 *  delete:
 *    description: Retrieve User Info
 *    tags:
 *      - sess
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: destroy session
 */
router.delete('/logout', function (req, res) {
  if ( req.mySession ){
    req.mySession.destroy();
    console.log("session destroyed");
    res.send({status:'destroyed'});
  } else {
    res.send({status: 'unchanged'})
  }
});

module.exports = router;