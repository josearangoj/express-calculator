const express = require('express'); // Import express
const routes = require('./routes'); // Import routes

// Initialize express app
const app = express();

// Attach routes to app
app.use('/', routes)

// Set constant for port
const PORT = process.env.PORT || 8000

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));