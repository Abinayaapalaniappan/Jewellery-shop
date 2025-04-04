// server.js
const express = require('express');
const pool = require('./db'); // Import the connection pool
const app = express();

app.use(express.json());

// GET all products
app.get('/products', (req, res) => {
  pool.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// POST new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  pool.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({
        id: results.insertId,
        name,
        price
      });
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});