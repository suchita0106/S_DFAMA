var express = require("express");
var router = express.Router();
var mentor = require('./mentor');

router.post("/", function (req, res) {
    var inputData = req.body;
    
    mentor.fetchMentor(function (err, results) {

        res.json(results);

    }, inputData);
});

router.post("/agenda", function (req, res) {
    var inputData = req.body;

    mentor.setAgenda(function (err, results) {
        res.json(results);

    }, inputData);
});

router.post("/agendaInit", function (req, res) {
    var inputData = req.body;

    mentor.fetchAgenda(function (err, results) {
        res.json(results);

    }, inputData);
});

router.post("/team", function (req, res) {
    var inputData = req.body;

    mentor.fetchTeamDetails(function (err, results) {
        res.json(results);

    }, inputData);
});

module.exports = router;