var express=require("express");
var router = express.Router();
var adminModule = require("./adminService");


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
    adminModule.fetchSubjectWiseMarks(function(err,results){
       res.json(results);
    },inputData);
});

router.post("/changePwd",function(req,res){
    var inputData = req.body;
    adminModule.changeTheStudentPwd(function(err,results){
       res.json(results);
    },inputData);
});




module.exports = router;