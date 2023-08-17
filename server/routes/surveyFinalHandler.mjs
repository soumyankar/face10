import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you create a new record.
router.post("/", async (req, res) => {
  const surveyResponseRawData = req.body; // Assuming the JSON data contains all the survey response fields
  
  const surveyResponse = {
    ...surveyResponseRawData,
  };
  
  let collection = await db.collection("surveyFinal");
  let result = await collection.insertOne(surveyResponse);
  
  // Check if insertion was successful and log the result
  if (result.insertedCount === 1) {
    console.log("Data insertion successful:", result.insertedId);
  } else {
    console.log("Data insertion failed.");
  }
  
  
  res.send(result).status(204);
});

export default router;