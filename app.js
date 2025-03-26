const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/GDG/Landing.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/GDG/Landing.html');
});

app.get('/Landing', (req, res) => {
    res.sendFile(__dirname + '/GDG/Landing.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/GDG/login.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/GDG/About.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});