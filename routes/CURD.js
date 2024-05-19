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

//! Add Cards
router.post("/ADDCard", (req, res) => {
  let { mainImg, title, price, reting, reviews, categery, deteles } =
    req.body.data;
  let newCard = new user({
    mainImg,
    img1: "",
    title,
    price,
    reting,
    reviews,
    categery,
    deteles,
  });
  newCard.save();
  res.redirect("/admin/Cards");
});
module.exports = router;
