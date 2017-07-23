var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
app.use(cors());

// Custom Services

var loginModule = require('./src/login');
var mentor = require('./src/mentorServices/mentorService');
var adminModule = require('./src/adminServices/admin');

var student = require('./src/studentServices/studentServices');

//File Upload to Server
var uploadModule = require("./src/common/uploadModule");

// Fetch Student Marks
var studentMarks = require('./src/studentMarks/studentMarks');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-

app.use("/", loginModule);

// Mentor Calls
app.use("/mentor", mentor);


// admin Calls
app.use("/admin", adminModule);

// Student calls
app.use("/student", student);
app.use("/studentMarks", studentMarks);


app.use("/upload", uploadModule);

app.listen(3010, function() {
    console.log("Server started");
});
