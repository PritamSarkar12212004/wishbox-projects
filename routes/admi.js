const express = require("express");
const cards = require("../models/cards");
const card = require("../models/cards");
const router = express.Router();

router.get("/", async (req, res) => {
  let Cdata = await cards.find();
  // res.render("./components/admin/cards.ejs", { Cdata });
  res.render("./layouts/Admain.ejs");
});
module.exports = router;
