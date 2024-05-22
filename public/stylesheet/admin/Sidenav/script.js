const ham = document.querySelector(".ham");
const hamImg = document.querySelector(".hambtn");
const nav = document.querySelector("nav");
//* ham menu

flag = 0;
ham.addEventListener("click", () => {
  if (flag == 0) {
    hamImg.src = "/Asests/AdimIcons/delete.png";
    nav.style.left = "0";
    flag = 1;
  } else {
    hamImg.src = "/Asests/AdimIcons/menu.png";
    nav.style.left = "-100%";
    flag = 0;
  }
});
