const express = require("express");
const user = require("../models/cards.js");
const router = express.Router();
//!delete cards
router.put("/Delete/:id", async (req, res) => {
  let { id } = req.params;
  let result = await user.findByIdAndDelete(id);
  let CardData = await user.find();
  res.redirect("/admin/Cards");
});

//! open Cards form
router.get("/add", (req, res) => {
  res.render("layouts/addCards.ejs");
});

module.exports = router;
