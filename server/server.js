// Necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

/* ENDPOINTS */
const PORT = process.env.PORT || 5000;
const surveyResponseAddress = process.env.SURVEY_RESPONSE_HANDLER_ENDPOINT;
const surveyFinalResponseAddress = process.env.SURVEY_FINAL_RESPONSE_HANDLER_ENDPOINT;
const analysisDataAddress = process.env.ANALYSIS_ENDPOINT;
const testAddress = process.env.TEST_ENDPOINT;
/* ENDPOINTS */

/* EXPRESS APPLICATION */
const app = express();
/* EXPRESS APPLICATION */

// Connect to MongoDB
mongoose.connect('mongodb://localhost/survey-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
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
