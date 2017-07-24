var express = require("express");
var router = express.Router();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer({ dest: 'uploads/' })

/**
 * https://expressjs.com/en/4x/api.html
 * https://github.com/expressjs/multer
 */
router.post("/", upload.single('myfile'), function(req,res, next){
    
    res.json({});
});

module.exports = router;