// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Abi_0594',
  database: 'jewelry_shop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection (optional)
pool.query('SELECT 1', (err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});

module.exports = pool;