const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("connected to mongodb")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visithistory: { timestamp: Date.now() },
      },
    },
    { new: true }
  );
  console.log(entry);
  // res.redirect(entry.redirectURL);
  res.send("wow");
});

app.get("/", (req, res) => {
  res.send("hey there");
});

app.listen(PORT, () => {
  console.log("server started");
});
