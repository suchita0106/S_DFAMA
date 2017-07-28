var mysql = require("mysql");

var config = {
    "host": "127.0.0.1",
    "user": "dev",
    "password": "dev",
    "database": "project"
};


module.exports =
    {
        // Login Validator
        "validateMentor": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM mentor where mentorUsername=? && mentorPassword=?";
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
        "fetchMentor": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "SELECT * FROM mentordetails where mentorId=?";
            var param = [inputData.mentorId];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }

                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "setAgenda": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "insert into agenda values(?, ?, ?, now())";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.mentorId, inputData.agendaText, inputData.agendaDate];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }


                callback(err, results)
                connection.end();
            });
        },

        "fetchAgenda": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "select agenda_Details, scheduleTime from agenda where mentorId=?";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.mentorId];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }

                callback(err, results)
                connection.end();
            });

        },

        "fetchTeamDetails": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "select rank, name, yearofpassing, qualification, groupName, teamId from StudentDetails where mentorId=?";
            // var sql = ADD YOUR QUERRY HERE AND COMMENT THE ABOVE
            var param = [inputData.mentorId];

            connection.query(sql, param, function (err, results) {
                if (!err) {
                    console.log(results);
                }

                callback(err, results)
                connection.end();
            });
        },


        "calculateTheTeamPerformance": function (callback) {
            var connection = mysql.createConnection(config);
            connection.connect();

            var sql = "select teamId,count(cpp_lab_status) as CLS, count(cpp_mcq_status) as CMS , count(alds_lab_status) as ALS, count(alds_mcq_status) as AMS , count(osc_lab_status) as OLS , count(osc_mcq_status) as OMS , count(j2se_lab_status) as CJLS , count(j2se_mcq_status) as CJMS, count(awp_lab_status) as AWLS , count(awp_mcq_status) as AWMS, count(j2ee_lab_status) as AJLS, count(j2ee_mcq_status) as AJMS, count(dbt_lab_status) as DBLS, count(dbt_mcq_status) as DBMS, count(se_lab_status) as SLS, count(se_mcq_status) as SMS , count(dotnet_lab_status) as DNLS , count(dotnet_mcq_status) as DNMS from student_marks_status where cpp_lab_status = 'PASS' and alds_lab_status = 'PASS' and cpp_mcq_status = 'PASS' and alds_mcq_status = 'PASS' and osc_lab_status = 'PASS' and osc_mcq_status='PASS' and j2se_lab_status='PASS' and j2se_mcq_status = 'PASS' and dbt_lab_status = 'PASS' and dbt_mcq_status='PASS' and se_lab_status='PASS' and se_mcq_status='PASS' and dotnet_lab_status='PASS' and dotnet_mcq_status='PASS' group by teamId";

            connection.query(sql, function (err, results) {
                console.log(results);

                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "calculateTheMentorPerformance": function (callback) {
            var connection = mysql.createConnection(config);
            connection.connect();
            var sql = "select mentorId, count(mentorId) as RESCOUNT, sum(studentInteraction) as INTERACTION , sum(teachingPace) as PACE, sum(responseTime) as RESPONSE , sum(noOfSessions) as SESSIONS , sum(communication) as COMM , sum(overallExp) as EXP from student_feedback group by mentorId";
            connection.query(sql, function (err, results) {
                console.log(results);
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        // "getTheAnsCountMentorWise" : function(callback){
        //          var connection = mysql.createConnection(config);
        //         connection.connect();
        //         var sql="select mentorId , count(questionId) as COUNT from answers group by mentorId";
        //         connection.query(sql, function(err, results) {
        //         console.log(results);
        //         // TASK COMPLETED
        //         callback(err, results)
        //         connection.end();
        //     });
        // },

        "calculateClassPerformance": function (callback) {
            var connection = mysql.createConnection(config);
            connection.connect();
            var sql = "call procClassPerformance()";
            connection.query(sql, function (err, results) {
                console.log(results);
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "calculateSubClassPerformance": function (callback) {
            var connection = mysql.createConnection(config);
            connection.connect();
            var sql = "select * from tempp";
            connection.query(sql, function (err, results) {
                console.log(results);
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        },

        "updateAgenda": function (callback, inputData) {
            var connection = mysql.createConnection(config);
            connection.connect();
            var sql = "update agenda set agenda_Details=? where agenda_Details=?";
            var param = [inputData.newAgenda, inputData.currentAgenda];
            connection.query(sql, param, function (err, results) {
                console.log(results);
                // TASK COMPLETED
                callback(err, results)
                connection.end();
            });
        }

    };

