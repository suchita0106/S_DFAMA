var express = require("express");
var bodyParser = require('body-parser');
var expressValidator= require('express-validator'); // //Declare Express-Validator
var router = express.Router();
var mentor = require('./mentor');

var app = express();
var emptymessage ={};

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-
router.use(expressValidator([]));

app.use(expressValidator);  //required for Express-Validator

router.post("/", function (req, res) {
    var inputData = req.body;
     req.checkBody('mentorId',"mentor id required").notEmpty().isNumeric();  //Validate subjectName

    var errors = req.validationErrors();
    if(!errors){

        mentor.fetchMentor(function (err, results) {

        res.json(results);

    }, inputData);
    }
else{

    console.log("invalid mentor id");
    res.json(emptymessage);
    }
    
});

router.post("/agenda", function (req, res) {
    var inputData = req.body;
    req.checkBody('mentorId',"mentor id required").notEmpty().isNumeric(); //Validate subjectName
    req.checkBody('agendaText',"agenda text is empty").notEmpty(); //Validate agenda Text
    req.checkBody('agendaDate',"agendaDate is not valid").notEmpty().isDate(); //Validate agenda Text
    var errors = req.validationErrors();

     if(!errors){
         mentor.setAgenda(function (err, results) {
        res.json(results);

            }, inputData);
     }
        else{

            console.log("agenda is not valid");
            res.json(emptymessage);
        }
    
});

router.post("/agendaInit", function (req, res) {
    var inputData = req.body;
req.checkBody('mentorId',"mentor id required").notEmpty().isNumeric(); //Validate mentorId
    var errors = req.validationErrors();
    if(!errors){

        mentor.fetchAgenda(function (err, results) {
        res.json(results);

    }, inputData);
    }
    else{
        console.log("failed to send privious agenda");
            res.json(emptymessage);
    }
    
});

router.post("/team", function (req, res) {
    var inputData = req.body;
    req.checkBody('mentorId','mentor id is required').notEmpty().isNumeric(); //validate mentor id
    
    var error = req.validationErrors();

    if(!error){

         mentor.fetchTeamDetails(function (err, results) {
        res.json(results);

    }, inputData);
    }
    else{

        console.log("failed to give team performance");
        res.json(emptymessage);
    }
   
});

module.exports = router;