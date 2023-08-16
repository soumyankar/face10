import { MongoClient } from "mongodb";

/* MONGODB ENDPOINTS */
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_USERNAME = process.env.MONGODB_URI_USERNAME;
const MONGODB_URI_CLUSTER_NAME = process.env.MONGODB_URI_CLUSTER_NAME;
const MONGODB_URI_PASSWORD = process.env.MONGODB_URI_PASSWORD;
// Replace the placeholders in the MongoDB URI with the actual values
const connectionString = MONGODB_URI
  .replace('<username>', MONGODB_URI_USERNAME)
  .replace('<password>', MONGODB_URI_PASSWORD)
  .replace('<cluster_name>', MONGODB_URI_CLUSTER_NAME) || "";
/* MONGODB ENDPOINTS */

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("survey-system");
console.log("Successfully connected to MongoDB");
export default db;