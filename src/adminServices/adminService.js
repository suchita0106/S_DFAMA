var mysql = require("mysql");
var bodyParser = require('body-parser');
var multer = require('multer');
var xlsxtojson = require("xlsx-to-json-lc");
var fs = require("fs");
var express = require('express');
var app = express();


app.use(bodyParser.json());

var config = {
    "host": "127.0.0.1",
     "user": "dev",
    "password": "dev",
    "database": "project"
};


module.exports =
{
    // Login Validator
    "validateAdmin": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM admin where adminUsername=? && adminPassword=?";
            var param = [inputData.UserId, inputData.UserPwd];
                
            connection.query(sql, param, function(err, results) {
               if(!err)
                {
                    console.log(results);
                } 
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "updateMentor": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "update mentordetails set mentorname = ?, yearOfExperience = ?, mentorId = ?, contactNo = ?, company = ?, areaOfExpertise = ?, batch = ?, email = ?, teamId = ? where mentorId = ?";
            var param = [inputData.mentorName, inputData.yearOfExperience, inputData.mentorId, inputData.contactNo, inputData.company, inputData.areaOfExpertise, inputData.batch, inputData.email, inputData.teamId, inputData.mentorId];
                
            connection.query(sql, param, function(err, results) {
               if(!err)
                {
                    console.log(results);
                } 
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },


        "fetchAllMentorDetails":function(callback){
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM mentorDetails";

            connection.query(sql, function(err, results) {
            console.log(results);

            // TASK COMPLETED
            callback(err, results)
            connection.end();
        });

    },
    
    "fetchSubjectWiseMarks":function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var subject = inputData.subjectName;

        console.log(subject);

        if(subject == '1'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  oopcpp_Lab as LAB, oopcpp_MCQ as MCQ, cpp_lab_status as LabStatus ,cpp_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '2'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  alds_Lab as LAB, alds_MCQ as MCQ, alds_lab_status as LabStatus ,alds_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '3'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  osc_Lab as LAB, osc_MCQ as MCQ, osc_lab_status as LabStatus ,osc_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '4'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  j2se_Lab as LAB, j2se_MCQ as MCQ, j2se_lab_status as LabStatus ,j2se_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '5'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  j2ee_Lab as LAB, j2ee_MCQ as MCQ, j2ee_lab_status as LabStatus ,j2ee_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '6'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  awp_Lab as LAB, awp_MCQ as MCQ, awp_lab_status as LabStatus ,awp_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '7'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  dbt_Lab as LAB, bdt_MCQ as MCQ, dbt_lab_status as LabStatus ,dbt_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '8'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  se_Lab as LAB, se_MCQ as MCQ, se_lab_status as LabStatus ,se_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }else  if(subject == '9'){
          
var sql = "select studentdetails.studentId , studentdetails.name ,  oopcpp_Lab as LAB, oopcpp_MCQ as MCQ, dotnet_lab_status as LabStatus ,dotnet_mcq_status as McqStatus from studentdetails,student_marks,student_marks_status where studentdetails.studentId = student_marks.studentId and studentdetails.studentId = student_marks_status.studentId;"

        }
               
            connection.query(sql, function(err, results) {
               if(!err)
                {
                    console.log(results);
                } 

                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });

    },

    // "fetchStudentDetails":function(callback,inputData){
    //         var connection = mysql.createConnection(config);
    //         connection.connect();

    //         var sql = "SELECT * FROM student where studentId = ?";

    //          var param = [inputData.stuId];
                
    //         connection.query(sql, param, function(err, results) {
    //            if(!err)
    //             {
    //                 console.log(results);
    //             } 
    //             // TASK COMPLETED
    //             callback(err, results)
    //             connection.end();
    //         });

    // },

    "changeTheStudentPwd" : function(callback, inputData){
               var connection = mysql.createConnection(config);
             connection.connect();

             var sql = "update student set studentPassword=? where studentId=?";

              var param = [inputData.newPwd,inputData.stuId];
                
             connection.query(sql, param, function(err, results) {
                if(!err)
                 {
                     console.log(results);
                 } 
                 // TASK COMPLETED
                 callback(err, results)
                 connection.end();
             });

    },

     "studentUpdate":function(callback, inputData){
        var connection=mysql.createConnection(config);
        connection.connect();
        var sql=`INSERT INTO student_marks(studentId ,
oopcpp_Lab ,
oopcpp_MCQ ,
oopcpp_Total ,
alds_Lab ,
alds_MCQ ,
alds_Total ,
osc_Lab ,
osc_MCQ ,
osc_Total ,
j2se_Lab ,
j2se_MCQ ,
j2se_Total ,
awp_Lab ,
awp_MCQ ,
awp_Total ,
j2ee_Lab ,
j2ee_MCQ ,
j2ee_Total ,
dbt_Lab ,
dbt_MCQ ,
dbt_Total ,
se_ppt ,
se_MCQ ,
se_Total,net_Lab,net_MCQ,net_Total) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        var para=[inputData.studentId,inputData.cppLab,inputData.cppMcq,inputData.cppTotal,inputData.dsLab,inputData.dsMcq,inputData.dsTotal,inputData.osLab,inputData.osMcq,inputData.osTotal,inputData.coreLab,inputData.coreMcq,inputData.coreTotal,inputData.awpLab,inputData.awpMcq,inputData.awpTotal,inputData.dbtLab,inputData.dbtMcq,inputData.dbtTotal,inputData.advLab,inputData.advMcq,inputData.advTotal,inputData.seLab,inputData.seMcq,inputData.seTotal,inputData.netLab,inputData.netMcq,inputData.netTotal];                                                    
        connection.query(sql,para,function(err,data){
            if(!err){
            console.log(data);
            }
            callback(err,data);
            connection.end();
        });
        
}

};
