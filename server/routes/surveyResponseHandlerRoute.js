const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const SurveyResponse = require('../models/surveyResponse');

// Route to save a completed survey
router.post('/', (req, res) => {
  const surveyResponseData = req.body; // Assuming the JSON data contains all the survey response fields
  
  // Convert the object properties into an array of response objects
  /* This code uses Object.entries() to iterate over the properties 
  of the surveyResponseData object and converts them into an array of response objects. 
  Each property's key is assigned as the questionId, and its value is assigned as the value in the response object.
  */
  const responses = Object.entries(surveyResponseData).map(([questionId, value]) => ({
    questionId: questionId,
    value: value,
  }));
  
  // Create a new instance of SurveyResponse with the required fields and the responses array
  // All other identification fields will be fulfilled by surveyModel.js
  const response = new SurveyResponse({
    responses: responses
  });
  
  // Save the survey response
  response.save()
  .then(() => {
    res.status(200).json({ message: 'Data saved successfully' });
  })
  .catch((error) => {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'An error occurred while saving the data' });
  });
});

router.get('/', (req, res) => {
  res.send('Server is up and running!');
});

module.exports = router;
