//require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = require('./database');

app.route('/books/:userId')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `test` WHERE userId = ? LIMIT 3", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));
// Port 8080 for Google App Engine
//app.set('port', process.env.PORT || 3000);
app.listen(3000);
