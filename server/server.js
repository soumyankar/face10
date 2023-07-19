// Necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

/* ENDPOINTS */
const PORT = process.env.PORT || 7000;
const HOST = '127.0.0.1';
const surveyResponseAddress = process.env.SURVEY_RESPONSE_HANDLER_ENDPOINT;
const surveyFinalResponseAddress = process.env.SURVEY_FINAL_RESPONSE_HANDLER_ENDPOINT;
const analysisDataAddress = process.env.ANALYSIS_ENDPOINT;
const testAddress = process.env.TEST_ENDPOINT;
/* ENDPOINTS */

/* MONGODB ENDPOINTS */
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_USERNAME = process.env.MONGODB_URI_USERNAME;
const MONGODB_URI_CLUSTER_NAME = process.env.MONGODB_URI_CLUSTER_NAME;
const MONGODB_URI_PASSWORD = process.env.MONGODB_URI_PASSWORD;
// Replace the placeholders in the MongoDB URI with the actual values
const formattedURI = MONGODB_URI
  .replace('<username>', MONGODB_URI_USERNAME)
  .replace('<password>', MONGODB_URI_PASSWORD)
  .replace('<cluster_name>', MONGODB_URI_CLUSTER_NAME);
/* MONGODB ENDPOINTS */

/* EXPRESS APPLICATION */
const app = express();
/* EXPRESS APPLICATION */

// Connect to MongoDB
mongoose.connect(formattedURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');
    console.log("connection uri=",formattedURI);
        // Ping the deployment
        const connection = mongoose.connection;
        const pingResult = await connection.db.admin().ping();
    
        if (pingResult.ok === 1) {
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } else {
          console.log("Failed to ping your deployment. Check your connection settings.");
        }
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Enable CORS for all routes
app.use(cors());
// Parse JSON request body
// parse the request body first.
app.use(express.json());
// Set up routes
// Import surveyRoute module
const surveyResponseHandlerRoute = require('./routes/surveyResponseHandlerRoute');
const analysisHandlerRoute = require('./routes/analysisHandlerRoute');
const surveyFinalResponseHandlerRoute = require('./routes/surveyFinalResponseHandlerRoute');

/* IMPORTANT */
// Add the url endpoints directly here and not on the routers.
/* IMPORTANT */


// Use surveyRoute for handling '/surveys' endpoint
app.use(surveyResponseAddress, surveyResponseHandlerRoute);
app.use(analysisDataAddress, analysisHandlerRoute);
app.use(surveyFinalResponseAddress, surveyFinalResponseHandlerRoute);

// Add the test route
app.get(testAddress, (req, res) => {
  res.send('Server is up and running on the ENV grabbed endpoint!');
});

// Add the test route
app.get("/test", (req, res) => {
  res.send('Server is up and running!');
});

/* ROUTER STACK */
// Output available routes
console.log("--- AVAILABLE ROUTES --- ");
app._router.stack.forEach((route) => {
  if (route.route && route.route.path) {
    console.log(route.route.path);
  }
});
console.log("--- AVAILABLE ROUTES --- ");
/* ROUTER STACK */

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});