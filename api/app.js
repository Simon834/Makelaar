var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");

var app = express();



app.use(cors({origin:"*"}));
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
   
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header( "Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
 
app.use("/", indexRouter);

module.exports = app;


