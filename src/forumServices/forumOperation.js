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

        var sql = "select * from Questions where answerStatus=1;";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "readComments" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Comments";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "readAnswers" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Answers;";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },
    

}