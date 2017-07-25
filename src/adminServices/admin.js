var express=require("express");
var bodyParser = require('body-parser');
var expressValidator= require('express-validator'); // //Declare Express-Validator
var router = express.Router();
var adminModule = require("./adminService");

var app = express();
var emptymessage ={};

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-
router.use(expressValidator([]));

app.use(expressValidator);  //required for Express-Validator

router.post("/",function(req,res)
{
   //To display graphs
});

router.get("/mdetails",function(req,res)
{
    adminModule.fetchAllMentorDetails(function(err,results){
        res.json(results);
    });
});

router.post("/imarksdetails",function(req,res){
    var inputData = req.body;
    //'subjectName'
    req.checkBody('subjectName',"subject name is required").notEmpty().isAlpha();  //Validate subjectName

    var errors = req.validationErrors();
    if(!errors){
        adminModule.fetchSubjectWiseMarks(function(err,results){
       res.json(results);
    },inputData);
    }

    else{
        console.log("invalid subject");
        res.json(emptymessage);
    }

    
});

router.post("/mentorUpdate",function(req,res){
    var inputData = req.body;
    adminModule.updateMentor(function(err,results){
       res.json(results);
    },inputData);
});


module.exports = router;