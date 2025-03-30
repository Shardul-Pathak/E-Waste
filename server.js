const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user_name',
  password: 'use_password',
  database: 'user1',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/login', (req, res) => {
  const { userid, mobile } = req.body;
  console.log('Userid:', userid, 'Mobile:', mobile);
  const sql = 'SELECT * FROM USERS WHERE Userid = ? AND Mobile = ?';

  db.query(sql, [userid, mobile], (err, results) => {
    if (err) {
      console.error(err);
      return res.send('Error');
    }

    console.log('Query results:', results);

    if (results.length > 0) {
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  });
});

app.post('/signup', (req, res) => {
  const { userid, username, firstname, lastname, mobile } = req.body;
  const sql = 'INSERT INTO USERS (Userid, Username, FirstName, LastName, Mobile) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [userid, username, firstname, lastname, mobile], (err, results) => {
    if (err) {
      console.error(err);
      return res.redirect('/signup?error=1');
    }
    res.redirect('/home');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
