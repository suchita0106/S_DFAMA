var express = require("express");
var bodyParser = require('body-parser');
var router = express.Router();
var expressValidator= require('express-validator'); // //Declare Express-Validator
var loginModule = require('./loginOperation');


var app = express();
var emptymessage ={};

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-
router.use(expressValidator([]));


app.use(expressValidator);  //required for Express-Validator

    router.post('/',function (req, res) {
    var inputData = req.body;
         loginModule.validateLoginCredential(function(err,results){
        res.json(results);
    },inputData);
    });

//     req.checkBody('UserId',"user id is required").notEmpty().isAlpha();  //Validate userId
//     req.checkBody('UserPwd',"Password  is required").notEmpty().isAlphanumeric(); //Validate Password
//     req.checkBody('UserType',"Type is not valid").notEmpty().isNumeric(); //Validate Type

//     var errors = req.validationResult();
        


//    if(!errors){   //No errors were found.  Passed Validation!
        
       
//     }
//     else{
//         console.log("invalid data");
//         res.json(emptymessage);
//     }

    
    
    


module.exports = router;