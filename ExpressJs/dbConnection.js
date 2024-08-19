// dbConnection.js
const sql = require('mssql');
const config = require('./dbConfig');

let pool;

async function getPool() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}

module.exports = { getPool };