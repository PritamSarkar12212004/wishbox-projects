const mongoose = require("mongoose");
const posterSchema = new mongoose.Schema({
  posterUrl: {
    type: String,
    required: true,
  },
});

const poster = mongoose.model("poster", posterSchema);
module.exports = poster;
