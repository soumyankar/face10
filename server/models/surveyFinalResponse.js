const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// IDs because I am assumming I might have to switch between various surveys.
const tempSurveyId = '20230712';

// Define the schema for the SurveyResponse model
const SurveyFinalResponseSchema = new mongoose.Schema(
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
  { collection: 'surveyFinal' } // Specify the collection name
);

/* UTILIITY FUNCTION */
// Before saving the document, generate a unique user ID
/* UTILIITY FUNCTION */

SurveyFinalResponseSchema.pre('save', async function (next) {
  this.surveyId = tempSurveyId;
  // Make new userId for the new entry.
  // Keep on do-while-ing until I actually receive a unique ID.
  let existingUser;
  do {
    this.userId = uuidv4();
    existingUser = await SurveyFinalResponse.findOne({ userId: this.userId });
  } while(existingUser);
  next();
});

// Final exported model.
// Create the SurveyResponse model based on the schema
const SurveyFinalResponse = mongoose.model('SurveyFinalResponse', SurveyFinalResponseSchema);

// Pass the mongoose schema model to other routes
module.exports = SurveyFinalResponse;
