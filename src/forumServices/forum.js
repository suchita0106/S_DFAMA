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
router.get("/forumInitC",function(req,res){
    forumModule.readAnsQuestionsAnswers(function(err,results){
        res.json(results);
    });
});

router.post("/firstAnswer",function(req,res){
    var inputData = req.body;
    forumModule.firstAnswer(function(err,results){
        res.json(results);
    }, inputData);
});

router.post("/furtherAnswers",function(req,res){
    var inputData = req.body;
    forumModule.furtherAnswer(function(err,results){
        res.json(results);
    }, inputData);
});

router.post("/searchTagA",function(req,res){
    var inputData = req.body;
    forumModule.searchUnAnsQuestions(function(err,results){
        res.json(results);
    }, inputData);
});
router.post("/searchTagB",function(req,res){
    var inputData = req.body;
    forumModule.searchAnsQuestions(function(err,results){
        res.json(results);
    },inputData);
});
router.post("/searchTagC",function(req,res){
    var inputData = req.body;
    forumModule.searchAnsQuestionsAnswers(function(err,results){
        res.json(results);
    }, inputData);
});


module.exports = router;