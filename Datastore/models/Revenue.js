const mongoose = require("mongoose");

const revenueSchema = new mongoose.Schema({
 categoryData: {
  type: mongoose.Schema.ObjectId,
  ref: "Users",
 },
});

const Revenue = mongoose.model("Revenue", revenueSchema);

module.exports = Revenue;
