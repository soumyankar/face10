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
  
    let collection = await db.collection("surveyStart");
    let result = await collection.insertOne(surveyResponse);
    res.send(result).status(204);
  });
  
  export default router;