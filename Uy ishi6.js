const kitoblar = [
  { nomi: "O'tkan kunlar", muallif: "Abdulla Qodiriy", narx: 45000, mavjud: true },
  { nomi: "Mehrobdan chayon", muallif: "Abdulla Qodiriy", narx: 38000, mavjud: false },
  { nomi: "Shum bola", muallif: "G'afur G'ulom", narx: 30000, mavjud: true },
  { nomi: "Sariq devni minib", muallif: "Xudoyberdi To'xtaboyev", narx: 52000, mavjud: true },
  { nomi: "Ikki eshik orasi", muallif: "O'tkir Hoshimov", narx: 60000, mavjud: false }
];


let royxat = document.getElementById('royxat')

for (let i = 0; i < kitoblar.length; i++) {
  royxat.innerHTML += "<li>" + kitoblar[i].nomi + "</li>";
}

console.log(kitoblar.length)



let kartalar1 = document.getElementById("kartalar1");

kitoblar.forEach(function(kitob) {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = "<h3>" + kitob.nomi + "</h3>" +
                   "<p>" + kitob.muallif + "</p>" +
                   "<p>" + kitob.narx + " so'm</p>";

  kartalar1.appendChild(card);
});


let kartalar2 = document.getElementById("kartalar2");

kitoblar.forEach(function(kitob) {
  let card = document.createElement("div");
  card.className = "card";

  // agar mavjud bolmasa sotilgan klassini qoshamiz
  if (kitob.mavjud === false) {
    card.classList.add("sotilgan");
  }

  card.innerHTML = "<h3>" + kitob.nomi + "</h3>" +
                   "<p>" + kitob.muallif + "</p>" +
                   "<p>" + kitob.narx + " so'm</p>";

  kartalar2.appendChild(card);
});