const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  phone: String,
  status: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);