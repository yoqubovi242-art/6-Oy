// const bugun = new Date();
// console.log(bugun.toDateString());

// const sana = new Date(2005, 4, 17);

// console.log(sana.getFullYear());
// console.log(sana.getMonth());
// console.log(sana.getDate());

// const kunlar = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
// const oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

// const sana = new Date();

// const kun = kunlar[sana.getDay()];
// const oy = oylar[sana.getMonth()];
// const sanaRaqam = sana.getDate();
// const yil = sana.getFullYear();

// console.log(${kun}, ${oy} ${sanaRaqam} ${yil});

// const bugun = new Date();
// const yangiYil = new Date(2027, 0, 1);

// const farq = yangiYil - bugun;
// const kun = Math.ceil(farq / (1000 * 60 * 60 * 24));

// console.log(Yangi yilgacha ${kun} kun qoldi);

// const bugun = new Date();

// const kun = String(bugun.getDate()).padStart(2, "0");
// const oy =  String(bugun.getMonth() + 1).padStart(2, "0");
// const yil = bugun.getFullYear();
// const soat = String(bugun.getHours()).padStart(2, "0");
// const daqiqa = String(bugun.getMinutes()).padStart(2, "0");

// console.log(kun + "." + oy + "." + yil + " " + soat + ":" + daqiqa);

// setTimeout(() => {
//   console.log("Salom, dunyo!");
// }, 2000);

// let hisob = 0;

// const id = setInterval(() => {
//   hisob++;
//   console.log("Tik-tak", hisob);

//   if (hisob === 3) {
//     clearInterval(id);
//   }
// }, 1000);

// setTimeout(() => {
//   console.log("Bir");
// }, 1000);

// setTimeout(() => {
//   console.log("Ikki");
// }, 2000);

// setTimeout(() => {
//   console.log("Uch");
// }, 3000);

// let hisob = 5;

// const id = setInterval(() => {
//   console.log(hisob);
//   hisob--;

//   if (hisob < 0) {
//     clearInterval(id);
//     console.log("Start!");
//   }
// }, 1000);