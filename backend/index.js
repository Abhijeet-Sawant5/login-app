const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('Login successful!');
    } else {
      res.send('Invalid credentials!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
