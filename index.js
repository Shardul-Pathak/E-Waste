const express = require('express');
const mysql = require('mysql2/promise'); 
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const databaseUsername = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;

// Database connection pools
const userDbPool = mysql.createPool({
  host: 'localhost',
  user: databaseUsername,
  password: databasePassword,
  database: 'user1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const cartDbPool = mysql.createPool({
  host: 'localhost',
  user: databaseUsername,
  password: databasePassword,
  database: 'cartDatabase',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function checkPoolConnection(pool, dbName) {
  try {
    const connection = await pool.getConnection();
    console.log(`Connection pool for ${dbName} is ready.`);

    await connection.execute('SELECT 1');
    console.log(`Database query for ${dbName} successful.`);

    connection.release();
  } catch (err) {
    console.error(`Connection pool for ${dbName} failed: ${err.stack}`);
  }
}

checkPoolConnection(userDbPool, 'user1');
checkPoolConnection(cartDbPool, 'cartDatabase');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/service', (req, res) => {
  res.render('service');
});

app.get('/cart', (req, res) => {
  res.render('cart');
});

app.get('/Dashabout', (req, res) => {
  res.render('Dashabout');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/login', async (req, res) => {
  const { userid, mobile } = req.body;
  console.log('Userid:', userid, 'Mobile:', mobile);
  const sql = 'SELECT * FROM USERS WHERE Userid = ? AND Mobile = ?';

  try {
    const [results] = await userDbPool.query(sql, [userid, mobile]);
    console.log('Query results:', results);

    if (results.length > 0) {
      res.redirect('/dashboard');
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

app.post('/signup', async (req, res) => {
  const { userid, username, firstname, lastname, mobile } = req.body;
  const sql = 'INSERT INTO USERS (Userid, Username, FirstName, LastName, Mobile) VALUES (?, ?, ?, ?, ?)';

  try {
    await userDbPool.query(sql, [userid, username, firstname, lastname, mobile]);
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/signup?error=1');
  }
});

app.post('/cart', async (req, res) => {
    try {
        const connection = await cartDbPool.getConnection();

        const street = req.body.street;
        const zip = req.body.zip;
        const items = req.body['item[]'];
        const quantities = req.body['quantity[]'];

        if (!street || !zip || !items || !quantities) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const [addressResult] = await connection.execute(
            'INSERT INTO addresses (street, zip) VALUES (?, ?)',
            [street, zip]
        );

        const addressId = addressResult.insertId;

        if (Array.isArray(items) && Array.isArray(quantities) && items.length === quantities.length) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                let quantity = parseInt(quantities[i]);

                if (!item || !quantity || typeof quantity !== 'number' || quantity < 1) {
                    return res.status(400).json({ message: 'Invalid item or quantity at index ' + i + '.' });
                }

                await connection.execute(
                    'INSERT INTO items (address_id, item, quantity) VALUES (?, ?, ?)',
                    [addressId, item, quantity]
                );
            }
            res.json({ message: 'Cart items added successfully.' });
        } else if (typeof items === 'string' && typeof quantities === 'string') {
            let quantity = parseInt(quantities);
            if (!items || !quantity || typeof quantity !== 'number' || quantity < 1) {
                return res.status(400).json({ message: 'Invalid item or quantity.' });
            }

            await connection.execute(
                'INSERT INTO items (address_id, item, quantity) VALUES (?, ?, ?)',
                [addressId, items, quantity]
            );
            res.json({ message: 'Cart items added successfully.' });
        } else {
            res.status(400).json({ message: 'Invalid item or quantity data.' });
        }

        connection.release();
    } catch (err) {
        console.error('Error: ' + err.stack);
        res.status(500).json({ message: 'An error occurred.' });
    }
});

module.exports = app;