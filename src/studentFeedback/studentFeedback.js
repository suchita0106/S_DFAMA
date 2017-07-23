var express = require("express");
var router = express.Router();
var studentFeedbackModule = require('./studentFeedbackOperation');

router.post("/",function(req,res){
    var inputData = req.body;
    studentFeedbackModule.insertFeedback(function(err,results){
        res.json(results);
    },inputData);
});

module.exports = router;