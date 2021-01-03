//require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./database');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.route('/books/:userId')
  .get(function(req, res, next) {
    // console.log("ryan likes pp");
    connection.query(
      "SELECT * FROM `test` WHERE userId = ? LIMIT 3", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
        
      }
    );
  });

app.use(cors());
app.use(express.json())
//app.use(bodyParser, urlencoded({extended: true}))


app.post("/api/insert", (req, res)=> {
  console.log("bruh");
  console.log(req.body);
  console.log(typeof req.body);
  const id = req.body.id
  const bookTitle = req.body.bookTitle
  const userId = req.body.userId

  
  const sqlInsert = "INSERT INTO test (id, bookTitle, userID) VALUES (?,?,?)"
  connection.query(sqlInsert, [id, bookTitle, userId], (err, result) => {
    console.log(err);
  })
  

});

app.get('/status', (req, res) => {
  res.send('Working!')
});

// Port 8080 for Google App Engine
//app.set('port', process.env.PORT || 3000);
// app.use("*",  (req, res) => {
 
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// });

app.listen(3000);

