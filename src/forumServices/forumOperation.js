var mysql = require("mysql");

var config = {
    "host":"127.0.0.1",
    "user":"dev",
    "password":"dev",
    "database":"project"
}

module.exports = {
    //insert question in database in Questions table
    "postQuestion" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "insert into Questions(questionText,tag,studentId)values(?,?,?)";
        var param = [inputData.question,inputData.tag,inputData.studentid];

        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },
    //fetch all data from database
    "readUnAnsQuestions" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Questions where answerStatus=0;";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "readAnsQuestions" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select Questions.questionId as QID,Answers.questionId as QAID, Answers.answerText as Ans from Answers,Questions where Questions.answerStatus=1;";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "getComments" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();
        var param = [inputData.ansId];
        var sql = "select * from Comments where answerId=?";
        
        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "getAnswers" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();
        
        var sql = "select * from Answers where questionId=?;";
        var param = [inputData.quesId];
        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },
    

}