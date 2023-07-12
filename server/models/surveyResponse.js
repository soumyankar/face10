const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// IDs because I am assumming I might have to switch between various surveys.
const tempSurveyId = '20230602';

// Define the schema for the SurveyResponse model
const SurveyResponseSchema = new mongoose.Schema(
  {
    surveyId: { type: String },
    userId: { type: String, unique: true },
    responses: [
      {
        questionId: { type: String, required: true },
        value: mongoose.Schema.Types.Mixed,
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'surveyStart' } // Specify the collection name
);

/* UTILIITY FUNCTION */
// Before saving the document, generate a unique user ID
/* UTILIITY FUNCTION */

SurveyResponseSchema.pre('save', async function (next) {
  this.surveyId = tempSurveyId;
  // Make new userId for the new entry.
  // Keep on do-while-ing until I actually receive a unique ID.
  let existingUser;
  do {
    this.userId = uuidv4();
    existingUser = await SurveyResponse.findOne({ userId: this.userId });
  } while(existingUser);
  next();
});

// Final exported model.
// Create the SurveyResponse model based on the schema
const SurveyResponse = mongoose.model('SurveyResponse', SurveyResponseSchema);

// Pass the mongoose schema model to other routes
module.exports = SurveyResponse;
