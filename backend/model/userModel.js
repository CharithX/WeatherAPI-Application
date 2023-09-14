const mongoose = require("mongoose");

//data schema for User
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  weatherData: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("User", userSchema);