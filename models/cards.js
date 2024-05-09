const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  mainImg: {
    type: String,
    required: true,
  },
  img1: String,
  Img2: String,
  Img3: String,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  delevery: {
    type: String,
    required: true,
  },
  reting: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  categery: {
    type: String,
    required: true,
  },
  deteles: {
    type: String,
    require: true,
  },
});
const card = mongoose.model("card", cardSchema);
module.exports = card;
