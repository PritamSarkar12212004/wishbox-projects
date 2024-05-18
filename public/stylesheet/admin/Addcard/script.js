//* form side
let img = document.getElementById("img");
let title = document.getElementById("title");
let price = document.getElementById("price");
let Reting = document.getElementById("Reting");
let Reviews = document.getElementById("Reviews");
let categiri = document.getElementById("categiri");
let detels = document.getElementById("detels");

//*card side
let imgCard = document.querySelector(".imgss");
let titleCard = document.querySelector(".one");
let priceCard = document.querySelector(".two");
let RetingCard = document.querySelector(".three");
let ReviewsCard = document.querySelector(".foure");
let categiriCard = document.querySelector(".five");
let detelsCard = document.querySelector(".six");

//! worling

//* images update
img.addEventListener("input", function () {
  let imguri = img.value;
  imgCard.src = imguri;
});

//* title update
title.addEventListener("input", function () {
  let titleuri = title.value;
  titleCard.textContent = titleuri;
});
//* price update

price.addEventListener("input", function () {
  let priceuri = price.value;
  priceCard.textContent = priceuri;
});
//* categiri update
categiri.addEventListener("input", function () {
  let categiriuri = categiri.value;
  categiriCard.textContent = categiriuri;
});

//*Reating update
Reting.addEventListener("input", function () {
  let Retinguri = Reting.value;
  RetingCard.textContent = Retinguri;
});

//* reviews update
Reviews.addEventListener("input", function () {
  let Reviewsuri = Reviews.value;
  ReviewsCard.textContent = Reviewsuri;
});

//* detels update
detels.addEventListener("input", function () {
  let detelsuri = detels.value;
  detelsCard.textContent = detelsuri;
});
