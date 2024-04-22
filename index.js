const express = require('express');
const { readFile } = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Sorry, out of order');
        } else {
            res.send(html);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
