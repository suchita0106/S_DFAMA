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
        },

    "setAgenda": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "insert into agenda values(?, ?, ?, now())";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.mentorId, inputData.agendaText, inputData.agendaDate];

            connection.query(sql, param, function(err, results)
            {
                if(!err)
                {
                    console.log(results);
                }


                callback(err, results)
                connection.end();
            });
        },

    "fetchAgenda": function(callback, inputData)
        {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "select agenda_Details, scheduleTime from agenda where mentorId=?";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.mentorId];

            connection.query(sql, param, function(err, results)
            {
                if(!err)
                {
                    console.log(results);    
                }

                callback(err, results)
                connection.end();
            });

        }
}
