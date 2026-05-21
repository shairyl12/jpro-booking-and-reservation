// server/database.js
const mysql = require('mysql2/promise'); // Must use '/promise' for your async/await code
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }, // Bypassing for cloud deployment
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = { pool };
