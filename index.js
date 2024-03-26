let i = 0;
let image = document.getElementById("image");
let images = ["./resources/main/heart.svg", "./resources/header/redHeart.svg"];

image.addEventListener("click", () => {
  i++;
  i %= images.length;
  image.src = images[i];
});
