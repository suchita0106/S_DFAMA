var express = require("express");
var router = express.Router();
var loginModule = require('./loginOperation');

router.post("/",function(req,res){
    var inputData = req.body;
    loginModule.validateLoginCredential(function(err,results){
        res.json(results);
    },inputData);
});

module.exports = router;