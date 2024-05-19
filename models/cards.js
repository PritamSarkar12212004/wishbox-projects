const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  mainImg: {
    type: String,
    default:"https://i.pinimg.com/564x/63/59/89/63598949eee0333f0873634b0096d76f.jpg"
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
