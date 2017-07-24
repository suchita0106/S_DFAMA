var mysql = require("mysql");

var config = {
    "host":"127.0.0.1",
    "user":"dev",
    "password":"dev",
    "database":"project"
}

module.exports = {
    //Insert student Feedback to database
    "insertFeedback" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "insert into student_feedback(studentId,mentorId,studentInteraction,teachingPace,responseTime,noOfSessions,communication,overallExp,studentReview)values(?,?,?,?,?,?,?,?,?)";
        var param = [inputData.sid,inputData.mid,inputData.one,inputData.two,inputData.three,
            inputData.four,inputData.five,inputData.six,inputData.review];

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