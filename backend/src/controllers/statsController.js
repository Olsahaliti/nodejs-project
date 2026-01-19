// src/controllers/statsController.js
const { getSummary } = require("../services/libraryStatsService");
async function summary(req, res) {
  const data = await getSummary();
  res.json(data);
}
module.exports = { summary };