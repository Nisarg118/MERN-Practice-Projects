const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateURL(req, res) {
  const shortID = shortid.generate();
  const body = req.body;
  if (!body.url) res.status(400).json({ error: "url is required" });
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  console.log(URL);
  return res.json({ id: shortID, redirectURL: body.url });
}

module.exports = { handleGenerateURL };
