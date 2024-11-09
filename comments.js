// Create web server
var express = require('express');
var app = express();
// Create database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost