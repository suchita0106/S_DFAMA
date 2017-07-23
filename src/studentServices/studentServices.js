var express = require("express");
var router = express.Router();
var student = require('./student');

router.post("/", function (req, res) {
    var inputData = req.body;
    student.fetchStudent(function (err, results) {
        res.json(results);
    }, inputData);
});

router.post("/agendaInit", function (req, res) {
    var inputData = req.body;
    student.fetchAgenda(function (err, results) {
        res.json(results);
    }, inputData);
});


module.exports = router;