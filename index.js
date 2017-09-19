var express = require('express');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var Regdatabase = require("./database2");
var Regisdata = require("./database2");
var app = express();


//body Parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

//expose express static folder
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: "handlebars"
}));
app.set('view engine', 'handlebars');

// //get route
app.get('/', function(req, res) {
    res.render('form');
});

app.post("/", function(req, res) {
    var regInp = req.body.textbox;
    //var storeRegNum = [];
    var newData = new Regisdata({
        regis: regInp
    });
    newData.save(function(err, results) {
        if (err) {
            console.log(err);
        } else if (results) {
            Regisdata.find({}, function(err, results) {
                console.log(results);
                res.render("form", {
                    regNums: results
                });
            });
        }

    });

});




app.set("port", (process.env.PORT || 3000));
app.set("host", (process.env.HOST || "http://localhost"))
app.listen(app.get("port"), function(err) {
    console.log('node app is running on port ' + app.get("host") + ":" + app.get('port'));
});
