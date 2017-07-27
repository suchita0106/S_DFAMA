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

router.post("/changePwd",function(req,res) {
    var inputData = req.body;
    
         req.checkBody('stuId',"stuId is invalid").notEmpty().isNumeric();  //Validate studId
          req.checkBody('oldPwd',"old password is invalid").notEmpty();  //Validate oldPwd
         req.checkBody('newPwd',"new password is invalid").notEmpty();  //Validate newPed
         req.checkBody('conPwd',"conform password is invalid").notEmpty();  //Validate conPwd

         var error = req.validationErrors();
         if(!error){

            adminModule.changeTheStudentPwd(function(err,results){
                res.json(results);
            },inputData);
         }
            else{

                console.log("fail to update password");

            }

    
});


module.exports = router;