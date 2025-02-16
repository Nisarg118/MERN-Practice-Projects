const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("connected to mongodb")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortID: shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log("server started");
});
