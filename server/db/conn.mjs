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
  // Use ping to check if the connection is successful
  console.log("Attempting ping to survey-system");
  const pingResult = await conn.db("survey-system").command({ ping: 1 });
  if (pingResult.ok === 1) {
    console.log("Successfully connected to survey-system MongoDB and ping successful");
  } else {
    console.error("Connected to MongoDB, but ping failed");
  }
} catch(e) {
  console.error(e);
}

let db = conn.db("survey-system");
console.log("Successfully connected to MongoDB");
export default db;