import express from "express";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;
connectToMongo();

//use middleware
app.use(express.json());

//use cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT} `);
});
