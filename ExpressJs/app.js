// app.js or your route file
const express = require('express');
const { getPool } = require('./dbConnection');

const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
     const pool = await getPool();
     const result = await pool.request().query('SELECT * FROM ALLOY_MASTER');
     res.json(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});