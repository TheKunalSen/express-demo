// Importing necessary modules
const express = require('express');

// Creating an instance of Express
const app = express();
const port = 3000; // Port number

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
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
