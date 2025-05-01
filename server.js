/**
 * @file routers.js
 * @description Pinsipal server to run the API
 */

const express = require('express');
const cors = require('cors');
const apiRouter = require('./routers/APIrouters');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Main api router
app.use('/api', apiRouter);

// default route
app.get('/', (req, res) => {
    res.send('Welcome to the Tether contract API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});