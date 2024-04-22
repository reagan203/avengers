const express = require('express');
const { readFile } = require('fs');
const path = require('path');

// Import and configure dotenv to load .env variables
require('dotenv').config();

const app = express();

// Use the PORT environment variable, with a fallback to 3000 if not defined
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Sorry, out of order');
        } else {
            res.send(html);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
