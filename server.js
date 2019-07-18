var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");

// scraping tools
var cheerio = require("cheerio");
var axios = require("axios");

// initialize express
var app = express();

// require all models
var db = require("./models");

var PORT = 3000;

// morgan logger
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to mongodb
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

