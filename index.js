let i = 0;
let image = document.getElementById("image");
let imgs = ["./resources/main/heart.svg", "./resources/header/redHeart.svg"];

image.addEventListener("click", function imgsrc() {
  i++;
  i %= imgs.length;
  image.src = imgs[i];
});
