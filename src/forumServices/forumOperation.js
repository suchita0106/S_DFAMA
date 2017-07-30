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

        var sql = "insert into questions(contentQue, tag, studentId, answerStatus, postedDate) value(?, ?, ?, false, now())";
        var param = [inputData.contentQue,inputData.tag,inputData.studentid];

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

        var sql = "select * from Questions where answerStatus=0";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "searchUnAnsQuestions" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Questions where answerStatus=0 and tag=?";
        var param = [inputData.tag];
        
        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "readAnsQuestions": function(callback, inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Questions where answerStatus = 1";

        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },


    "searchAnsQuestions" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        //var sql = "select * from Questions where answerStatus=0;";

        var sql = "select * from Questions where answerStatus=1 and tag=?";
        var param = [inputData.tag];
        
        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

   
    "readAnsQuestionsAnswers" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from answers";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },


    "searchAnsQuestionsAnswers" : function(callback){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from answers";
        
        connection.query(sql,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "firstAnswer": function(callback, inputData){
        var connection = mysql.createConnection(config);
        connection.connect();
        
        var sql = "call insertFirstAnswer(?, ?, ?)";
        var param = [inputData.qId, inputData.qCont, inputData.mentorId];
        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "furtherAnswer": function(callback, inputData){

        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "insert into answers(questionId, contentAns, mentorId, postedDate) values(?, ?, ?, now())";
        var param = [inputData.qid, inputData.answer, inputData.mentorId];

        connection.query(sql, param, function(err, results){

            if(!err)
                {
                    console.log(results);
                }


                callback(err, results);
                connection.end();

        });
    }
    

}