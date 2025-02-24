const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateURL(req, res) {
  const shortID = shortid.generate();
  if (!shortID) {
    console.error("Error: shortId is missing!");
    return;
  }
  console.log(shortID);
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const temp = await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    id: shortID,
  }); 
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  const result = await URL.findOne({ shortID });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateURL, handleGetAnalytics };
