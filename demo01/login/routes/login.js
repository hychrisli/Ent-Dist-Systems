var express = require('express');
var router = express.Router();
var data = require('./data');
var cred = data.cred;

router.post('/', function(req, res){

    const username = req.body.username;
    const password = req.body.password;
    if ( username in cred && password == cred[username]){
        res.send("Login Success");
    } else {
        res.send("Login Failure");
    }
});

module.exports = router;