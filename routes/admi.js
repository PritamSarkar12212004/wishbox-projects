const express = require("express");
const cards = require("../models/cards");
const poster = require("../models/posters");
const Adver = require("../models/advertisement");
const user = require("../models/login");
const router = express.Router();

router.get("/", async (req, res) => {
  let postar = await poster.find();
  let CardData = await cards.find();
  let AdverData = await Adver.find();
  let userData = await user.find();
  res.render("layouts/Admain.ejs", { CardData, postar, AdverData,userData });
});
module.exports = router;
