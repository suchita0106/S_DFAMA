var express = require("express");
var router = express.Router();
var forumModule = require('./forumOperation');

router.post("/postQuestion",function(req,res){
    var inputData = req.body;
    forumModule.postQuestion(function(err,results){
        res.json(results);
    },inputData);
});
router.get("/forumInitA",function(req,res){
    forumModule.readUnAnsQuestions(function(err,results){
        res.json(results);
    });
});
router.get("/forumInitB",function(req,res){
    forumModule.readAnsQuestions(function(err,results){
        res.json(results);
    });
});
router.post("/getAnswers",function(req,res){
    var inputData = req.body;
    forumModule.getAnswers(function(err,results){
        res.json(results);
    }, inputData);
});
router.post("/getComments",function(req,res){
    var inputData = req.body;
    forumModule.getComments(function(err,results){
        res.json(results);
    },inputData);
});


module.exports = router;