var mysql = require("mysql");

var config = {
<<<<<<< HEAD
    "host": "localhost",
    "user": "dev",
=======
    "host": "127.0.0.1",
     "user": "dev",
>>>>>>> 2c045d9af8396477591db258c38f8439d762bf8f
    "password": "dev",
    "database": "project"
};


module.exports =
    {
        // Login Validator
        "validateStudent": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM student where studentUsername=? && studentPassword=?";
            var param = [inputData.UserId, inputData.UserPwd];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }


                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        // If Login Successful get Mentor Details
        "fetchStudent": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM studentdetails where studentId=?";
            var param = [inputData.studentId];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }

                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "fetchAgenda": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "select agenda_Details, scheduleTime from agenda where mentorId = (select mentorId from studentdetails where studentId = ?)";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.studentId];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }

                callback(err, results)
                connection.end();
            });

        }
    }
