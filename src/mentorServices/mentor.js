var mysql = require("mysql");

var config = {
    "host": "127.0.0.1",
    //"host": "localhost",
     "user": "dev",
    "password": "dev",
    "database": "project"
};


module.exports =
{
    // Login Validator
    "validateMentor": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM mentor where mentorUsername=? && mentorPassword=?";
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

        // If Login Successful get Mentor Details
    "fetchMentor": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM mentordetails where mentorId=?";
            var param = [inputData.mentorId];
                
            connection.query(sql, param, function(err, results) {
               if(!err)
                {
                    console.log(results);
                } 

                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        }
}
