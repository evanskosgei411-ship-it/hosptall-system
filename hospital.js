const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: String,
  region: String
});

module.exports = mongoose.model("Hospital", hospitalSchema);