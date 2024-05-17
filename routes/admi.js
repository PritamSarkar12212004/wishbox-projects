const express = require("express");
const cards = require("../models/cards");
const poster = require("../models/posters");
const Adver = require("../models/advertisement");
const router = express.Router();

router.get("/", async (req, res) => {
  let postar = await poster.find();
  let CardData = await cards.find();
  let AdverData = await Adver.find();
  res.render("layouts/Admain.ejs", { CardData, postar, AdverData });
});
module.exports = router;
