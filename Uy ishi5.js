//Osson
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  btn.textContent = "Bosildi!";
});



let rasm = document.getElementById("rasm");

rasm.addEventListener("mouseover", function () {
  rasm.style.width = "300px";
});

rasm.addEventListener("mouseout", function () {
  rasm.style.width = "150px";
});



let parol = document.getElementById("parol");
let korsat = document.getElementById("korsat");

korsat.addEventListener("change", function () {
  if (korsat.checked) {
    parol.type = "text";
  } else {
    parol.type = "password";
  }
});
//--------Orta------


let vazifaInput = document.getElementById("vazifa");
let qoshBtn = document.getElementById("qosh");
let royxat = document.getElementById("royxat");

function vazifaQosh() {
  let matn = vazifaInput.value.trim();

  // bo'sh bo'lsa qo'shmaymiz
  if (matn === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = matn;
  royxat.appendChild(li);

  // inputni tozalash
  vazifaInput.value = "";
  vazifaInput.focus();
}

qoshBtn.addEventListener("click", vazifaQosh);

vazifaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    vazifaQosh();
  }
});



let ismInput = document.getElementById("ism");
let yoshInput = document.getElementById("yosh");
let tekshirBtn = document.getElementById("tekshir");
let natija = document.getElementById("natija");

tekshirBtn.addEventListener("click", function () {
  let ism = ismInput.value.trim();
  let yosh = yoshInput.value;

  if (ism === "" || yosh === "") {
    natija.textContent = "Xato: barcha maydonlarni to'ldiring!";
    natija.className = "xato";
    return;
  }

  if (Number(yosh) > 18) {
    natija.textContent = "Xush kelibsiz, " + ism + "!";
    natija.className = "ok";
  } else {
    natija.textContent = "Kechirasiz, siz hali yoshsiz";
    natija.className = "xato";
  }
});



let likeBtn = document.getElementById("likeBtn");
let soni = document.getElementById("soni");

let liked = false;
let count = 0;

likeBtn.addEventListener("click", function () {
  if (liked === false) {
    liked = true;
    count++;
    likeBtn.textContent = "Liked";
  } else {
    liked = false;
    count--;
    likeBtn.textContent = "Like";
  }
  soni.textContent = count;
});

