var express = require('express');
var router = express.Router();
var data = require('./data');
var cred = data.cred;

router.post('/', function(req, res){

    const username = req.body.username;
    const password = req.body.password;
    cred[username] = password;
    console.log(username);
    console.log(cred[username]);
    res.send("Signup Success");
});

module.exports = router;