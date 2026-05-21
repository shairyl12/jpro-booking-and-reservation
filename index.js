// index.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// Import Routes
const packagesRouter = require('./server/routes/packages');
app.use('/api/packages', packagesRouter);

// Serve Frontend
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
