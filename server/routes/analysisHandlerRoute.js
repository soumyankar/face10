const express = require('express');
const mongoose = require('mongoose');
const { DataFrame } = require('pandas-js')
const router = express.Router();

// The schema data model
const SurveyResponseData = require('../models/surveyResponse');

// Create an API endpoint for analysis and plot generation
router.get('/age', async (req, res) => {
  try {
    const data = await SurveyResponseData.find();
    
    // Extract the age values from the responses column
    const values = data.map((item) => {
      const response = item.responses.find((r) => r.questionId === 'age');
      return response ? response.value : null;
    });
    
    // Generate chart data using the createChartData function
    res.status(200).json({ values });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;