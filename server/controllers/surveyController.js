const Survey = require('../models/Survey');

// Controller actions for handling survey-related requests
const SurveyController = {
  // Get all surveys
  getAllSurveys: async (req, res) => {
    try {
      const surveys = await Survey.find();
      res.json(surveys);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new survey
  // Unsure if I would need this method at all.
  createSurvey: async (req, res) => {
    try {
      const { title, questions } = req.body;
      const newSurvey = new Survey({ title, questions });
      await newSurvey.save();
      res.status(201).json(newSurvey);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get a specific survey by ID
  getSurveyById: async (req, res) => {
    try {
      const surveyId = req.params.id;
      const survey = await Survey.findById(surveyId);
      if (!survey) {
        return res.status(404).json({ error: 'Survey not found' });
      }
      res.json(survey);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Update a specific survey by ID
  updateSurveyById: async (req, res) => {
    try {
      const surveyId = req.params.id;
      const { title, questions } = req.body;
      const updatedSurvey = await Survey.findByIdAndUpdate(
        surveyId,
        { title, questions },
        { new: true }
      );
      if (!updatedSurvey) {
        return res.status(404).json({ error: 'Survey not found' });
      }
      res.json(updatedSurvey);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Delete a specific survey by ID
  deleteSurveyById: async (req, res) => {
    try {
      const surveyId = req.params.id;
      const deletedSurvey = await Survey.findByIdAndDelete(surveyId);
      if (!deletedSurvey) {
        return res.status(404).json({ error: 'Survey not found' });
      }
      res.json({ message: 'Survey deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = SurveyController;
