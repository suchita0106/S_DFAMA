var mysql = require("mysql");

var config = {
     "host": "localhost",
     "user": "suchi",
    "password": "suchi",
    "database": "suchi"
}

module.exports = {
    //Read marks from database
    "readMarks" : function(callback,inputData){
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "select * from Student_Marks where studentId=?";
        var param = inputData.studentId;

        connection.query(sql,param,function(err,results){
            if(!err){
                console.log(results);
            }
            // TASK  COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "fetchStudentDetails":function(callback,inputData){
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM student where studentId = ?";

             var param = [inputData.stuId];
                
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