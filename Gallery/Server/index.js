import express from "express";
import ConnectToMongo from "./config/db.js";

const app = express();
const PORT = 8000;

ConnectToMongo();
app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT} `);
});
