const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 7494;


const mongoUrl = process.env.mongodb;

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});