const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes setup
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/emails', require('./routes/emails'));
app.use('/api/conversation', require('./routes/conversation'));
app.use('/api/meetings', require('./routes/meetings'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});