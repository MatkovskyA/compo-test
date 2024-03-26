let i = 0;
let image = document.getElementById("image");
let images = ["./resources/main/heart.svg", "./resources/header/redHeart.svg"];

image.addEventListener("click", () => {
  i++;
  i %= images.length;
  image.src = images[i];
});

// Button caunter

const btnBasket = document.querySelector("#basket-btn");
const btnCounter = document.querySelector("#counter-btn");

btnBasket.addEventListener("click", () => {
  btnCounter.classList.add("card__buttons-caunt");
  btnBasket.classList.add("card__buttons-hidden");

  let btnPlus = document.querySelector("#plus");
  let btnMinus = document.querySelector("#minus");
  let countText = document.querySelector("#counter");
  let count = 1;
  btnPlus.addEventListener("click", () => {
    count++;
    countText.innerText = count + " штук";
  });

  btnMinus.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countText.innerText = count + " штук";
    } else if (count <= 1) {
      
      btnCounter.classList.remove("card__buttons-caunt");
      btnBasket.classList.remove("card__buttons-hidden");
      btnMinus.isDisabled = true
    }
  });
});

