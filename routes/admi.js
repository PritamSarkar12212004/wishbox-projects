const express = require("express");
const cards = require("../models/cards");
const router = express.Router();

router.get("/", async (req, res) => {
  let CardData = await cards.find();
  console.log(CardData);
  res.render("../components/admin/cards.ejs",{CardData});
  res.render("layouts/Admain.ejs");
});
module.exports = router;
