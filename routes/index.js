const express = require("express");
const Cards = require("../models/cards");
const router = express.Router();

//* main home page
router.get("/", async (req, res) => {
  let CardData = await Cards.find();
  res.render("layouts/home.ejs", { CardData });
});
//* show page
router.get("/show/:id", async (req, res) => {
  let { id } = req.params;
  let ShowData = await Cards.findById(id);
  //! category making
  let cate = ShowData.categery;
  let categeryItams = await Cards.find({ categery: cate });
  res.render("../components/categuryItems.ejs", { categeryItams });
  res.render("layouts/show.ejs", { ShowData, categeryItams });
});

//*contact page
router.get("/contact", (req, res) => {
  res.render("layouts/contact.ejs");
});

module.exports = router;
