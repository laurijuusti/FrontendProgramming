const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, rating INTEGER, watch_date TEXT)');
});

// API endpoint to get all movies
app.get('/api/movies', (req, res) => {
  db.all('SELECT * FROM movies', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// API endpoint to add a new movie
app.post('/api/movies', (req, res) => {
  const { name, rating, watch_date } = req.body;
  db.run('INSERT INTO movies (name, rating, watch_date) VALUES (?, ?, ?)', [name, rating, watch_date], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// API endpoint to search for movies by name
app.get('/api/movies/search', (req, res) => {
  const { name } = req.query;
  db.all('SELECT * FROM movies WHERE name LIKE ?', [`%${name}%`], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
