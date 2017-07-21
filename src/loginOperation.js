var mysql = require("mysql");

var config = {
    "host": "localhost",
    "user": "suchi",
    "password": "suchi",
    "database": "suchi"
};

module.exports = {
    "validateLoginCredential": function(callback,inputData) {
        var connection = mysql.createConnection(config);
        connection.connect();

            var sql = "SELECT * FROM Admin where adminUsername=? && adminPassword=?";
            var param = [inputData.UserId, inputData.UserPwd];
            connection.query(sql, param, function(err, results) {
            console.log(results);

            // TASK COMPLETED
            callback(err, results)
            connection.end();
        });
    }
}