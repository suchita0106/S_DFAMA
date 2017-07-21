var express = require("express");
var router = express.Router();
var mentor = require('./mentor');

router.post("/",function(req,res)
{
    var inputData = req.body;
    mentor.fetchMentor(function(err,results){
        res.json(results);
    },inputData);
});

module.exports = router;