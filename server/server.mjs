// Necessary libraries
import express from "express";
import cors from "cors";
/* ENV VARIABLES */
import "./loadEnvironment.mjs";
/* ENV VARIABLES */

/* EXPRESS APPLICATION */
const app = express();
/* EXPRESS APPLICATION */
// Enable CORS for all routes
app.use(cors());
// Parse JSON request body
// parse the request body first.
app.use(express.json());

/* ENDPOINTS */
const PORT = process.env.PORT || 5050;
const surveyStartApi = process.env.SURVEY_START_RESPONSE_HANDLER_ENDPOINT;
const surveyFinalApi = process.env.SURVEY_FINAL_RESPONSE_HANDLER_ENDPOINT;
/* ENDPOINTS */

// Set up routes
// Import surveyRoute module
import surveyStartRoute from './routes/surveyStartHandler.mjs';
import surveyFinalRoute from './routes/surveyFinalHandler.mjs';

/* IMPORTANT */
// Add the url endpoints directly here and not on the routers.
/* IMPORTANT */


// Use surveyRoute for handling '/surveys' endpoint
app.use(surveyStartApi, surveyStartRoute);
app.use(surveyFinalApi, surveyFinalRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});