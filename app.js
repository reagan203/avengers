// Import Express.js library for building the web application framework
const express = require('express');

// Destructure 'readFile' from the 'fs' (File System) module to read files from the file system
const { readFile } = require('fs');

// Import 'path' module to work with file and directory paths
const path = require('path');

// Import and configure 'dotenv' to load environment variables from a '.env' file
require('dotenv').config();

// Create an Express.js application instance
const app = express();

// Use the 'PORT' environment variable to set the port number, with a fallback to 3000 if the variable is not defined
const PORT = process.env.PORT || 3000;

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
    // Read the 'home.html' file in UTF-8 encoding
    readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
        // If an error occurs while reading the file, return a 500 status code with an error message
        if (err) {
            res.status(500).send('Sorry, out of order');
        } else {
            // If no error, send the HTML content as the response
            res.send(html);
        }
    });
});

// Start the server, listening on the defined port, and log a message indicating the port it's running on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
