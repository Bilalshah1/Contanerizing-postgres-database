const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Database Configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'learning_db',
  password: process.env.DB_PASSWORD || '123',
  port: 5432,
});

app.get('/', (req, res) => res.send('Backend is running!'));

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
python3 -m venv venv
pip install google-generativeai
source venv/bin/activate

https://drive.google.com/file/d/1EPTcF3DLgfl6jD5ILYVpbHE3xErRK1un/view?usp=sharing
