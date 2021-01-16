//require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./database');
const bodyParser = require('body-parser');

// app.route('/books/:userId')
//   .get(function(req, res, next) {
//     // console.log("ryan likes pp");
//     connection.query(
//       "SELECT * FROM `users` WHERE userId = ? LIMIT 3", req.params.userId,
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
        
//       }
//     );
//   });

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.get("/api/check",  (req, res) => {

  console.log(req.body);

  const username = req.body.username
  const password = req.body.password
  console.log(username + password)
  var isauthenticated = false
  const sqlChecker = "SELECT * "+
                      "FROM users "+
                      "WHERE uniqueName = ? AND password = ?"

  connection.query(sqlChecker, [username, password], function (err, result){

    if(err) console.log(err);
    else{
      console.log("this shit worked bruh");
      isauthenticated = true;
    }
  })
  res.send(isauthenticated);

})



// app.post("/api/insert", (req, res)=> {
//   console.log("bruh");
//   console.log(req.body);
//   console.log(typeof req.body);
//   const id = req.body.id
//   const bookTitle = req.body.bookTitle
//   const userId = req.body.userId

  
//   const sqlInsert = "INSERT INTO users (id, bookTitle, userID) VALUES (?,?,?)"
//   connection.query(sqlInsert, [id, bookTitle, userId], (err, result) => {
//     console.log(err);
//   })
  

// });

app.get('/status', (req, res) => {
  res.send('Working!')
});

// Port 8080 for Google App Engine
//app.set('port', process.env.PORT || 3000);
// app.use("*",  (req, res) => {
 
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// });

app.listen(3000);

