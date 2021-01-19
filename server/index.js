//require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors");
const connection = require('./database');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;



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



app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(session({
  key: "userId",
  secret: "etahgamesyoutube",
  resave: false,
  saveUninitialized:false,
  cookie: {
    //this represents how long the session will be active, in this case it is 24 hours
    expires: 60 * 60 * 24
  },
}));

// app.post("/api/auth",  (req, res) => {

//   console.log(req.body);

//   const username = req.body.username;
//   const password = req.body.password;
//   console.log(username + password);
//   var isauthenticated = false;
//   const sqlChecker = "SELECT * "+
//                       "FROM users "+
//                       "WHERE uniqueName = ? AND password = ?";

//   connection.query(sqlChecker, [username, password], function (err, result) {
//     if(err) res.send(err);
//     else {
//       const isAuthenticated = (result.length > 0)?true:false;
//       if (isAuthenticated) {
//         req.session.loggedIn = true;
//         req.session.username = username;
//         res.redirect("/");
//       }
//       //res.send(isAuthenticated);
//     }
//   });

// })


app.post("/register", (req, res) => {
  const username = req.body.username;
  const displayName = req.body.displayName;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    connection.query(
      "INSERT INTO users(uniqueName, publicName, password) VALUES (?,?,?)", 
      //send hashed password to database for data security
      [username,displayName,hash],
      (err, result) => {
        console.log(err)
      } )
  })

  
})

app.get("/login", (req, res) => {
  if(req.session.user)
  {
    res.send({loggedIn: true, user: req.session.user})
  } else{
    res.send({loggedIn: false})
  }
})

app.post("/login", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * FROM users WHERE uniqueName = ?",
    [username],
    (err, result) => {
      if(err) {
        res.send({ err: err});
      }

      if(result.length > 0){
        //compare hashed password to the password given for decrypting
        bcrypt.compare(password, result[0].password, (error, response) => {
          if(response){
            req.session.user = result;
            console.log(req.session.user);
            res.send(result)
          } else{
            res.send({message: "Wrong username or password!"})
          }
        });
      } else {
        res.send({message: "User doesn't exist"});
      }
    }
  )

});



// app.post("/api/insert", (req, res)=> {
//   consolelog("bruh");
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
