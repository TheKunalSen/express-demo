// Importing necessary modules
const express = require('express');

// Creating an instance of Express
const app = express();
const port = 3000; // Port number
const hostname = '0.0.0.0'
// Define a route that returns a JSON response
app.get('/api/data', (req, res) => {
    // Sample JSON data
    const jsonData = {
        message: "This is a sample JSON response",
        date: new Date(),
        status: "success"
    };

    // Sending JSON response
    res.json(jsonData);
});

// Start the server
app.listen(port,hostname, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
