var express = require("express");
var router = express.Router();
var studentMarksModule = require('./studentMarksOperation');

router.post("/",function(req,res){
    var inputData = req.body;
    studentMarksModule.readMarks(function(err,results){
        res.json(results);
    },inputData);
})

module.exports = router;