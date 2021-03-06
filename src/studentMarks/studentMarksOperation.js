var mysql = require("mysql");

var config = {
     "host": "127.0.0.1",
     "user": "dev",
    "password": "dev",
    "database": "project"
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