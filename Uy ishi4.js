
let title = document.getElementById("shop-title");
console.log(title);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log("Cardlar soni:", cards.length);


let names = document.querySelectorAll("h3");
for (let i = 0; i < names.length; i++) {
  console.log(names[i].textContent);
}

let prices = document.querySelectorAll(".price");
prices.forEach(function (p) {
  console.log(p.textContent);
});

let stock3 = document.querySelector("#card3 .stock");
console.log(stock3);



let shop = document.getElementById("shop");

console.log("Birinchi:", shop.firstElementChild);
console.log("Oxirgi:", shop.lastElementChild);

let card2 = document.getElementById("card2");
let uzumCard = card2.nextElementSibling;
console.log(uzumCard.querySelector("h3").textContent);

let card4 = document.getElementById("card4");
let uzumCard2 = card4.previousElementSibling;
console.log(uzumCard2);

let firstStock = document.querySelector(".stock");
let parentCard = firstStock.parentElement;
console.log(parentCard.querySelector("h3").textContent);


title.textContent = "Yangi mevalar do'koni";
title.style.color = "green";


cards.forEach(function (card) {
  card.style.borderRadius = "10px";
});

document.getElementById("card1").classList.add("sale");

document.getElementById("card3").classList.add("sold-out");

prices.forEach(function (p) {
  p.style.fontWeight = "bold";
});



let stocks = document.querySelectorAll(".stock");
stocks.forEach(function (stock) {
  if (stock.textContent === "Tugagan") {
    stock.parentElement.classList.add("sold-out");
  } else if (stock.textContent === "Bor") {
    stock.style.color = "green";
  }
});


cards.forEach(function (card) {
  let price = card.querySelector(".price");
  if (Number(price.textContent) < 10000) {
    card.classList.add("sale");
  }
});




for (let i = 0; i < cards.length; i++) {
  if (i % 2 === 1) {
    cards[i].style.backgroundColor = "lightgray";
  }
}


let maxPrice = 0;
let expensiveCard = null;

cards.forEach(function (card) {
  let narx = Number(card.querySelector(".price").textContent);
  if (narx > maxPrice) {
    maxPrice = narx;
    expensiveCard = card;
  }
});

expensiveCard.style.border = "2px solid red";
console.log("Eng qimmat:", expensiveCard.querySelector("h3").textContent, maxPrice);