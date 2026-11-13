// <!DOCTYPE html>
// <html lang="uz">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>1-masala. Familiya va yosh</title>
//   <style>
//     body { font-family: sans-serif; max-width: 420px; margin: 40px auto; padding: 0 16px; }
//     input, button { display: block; width: 100%; padding: 10px; margin: 8px 0; font-size: 16px; box-sizing: border-box; }
//     #natija { margin-top: 20px; font-weight: bold; }
//   </style>
// </head>
// <body>
//   <h1>Familiya va yosh</h1>
//   <input id="familiya" type="text" placeholder="Familiya">
//   <input id="yosh" type="number" min="0" placeholder="Yosh">
//   <button id="saqlash">Saqlash</button>
//   <p id="natija"></p>

//   <script>
//     const familiyaInput = document.getElementById('familiya');
//     const yoshInput = document.getElementById('yosh');
//     const natija = document.getElementById('natija');

//     function korsat() {
//       const f = localStorage.getItem('familiya');
//       const y = localStorage.getItem('yosh');
//       if (f !== null && y !== null) {
//         natija.textContent = 'Familiya: ' + f + ', Yosh: ' + y;
//         familiyaInput.value = f;
//         yoshInput.value = y;
//       }
//     }

//     document.getElementById('saqlash').addEventListener('click', () => {
//       const f = familiyaInput.value.trim();
//       const y = yoshInput.value.trim();
//       if (!f || !y) {
//         alert("Iltimos, ikkala maydonni to'ldiring.");
//         return;
//       }
//       localStorage.setItem('familiya', f);
//       localStorage.setItem('yosh', y);
//       korsat();
//     });

//     korsat();
//   </script>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="uz">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>2-masala. Bosishlar sanagichi</title>
//   <style>
//     body { font-family: sans-serif; text-align: center; margin-top: 60px; }
//     #son { font-size: 64px; margin: 20px 0; }
//     button { padding: 12px 24px; font-size: 18px; margin: 4px; cursor: pointer; }
//   </style>
// </head>
// <body>
//   <h1>Bosishlar sanagichi</h1>
//   <div id="son">0</div>
//   <button id="bosish">Bosish</button>
//   <button id="nol">Nolga tushirish</button>

//   <script>
//     const son = document.getElementById('son');
//     let sanagich = parseInt(localStorage.getItem('sanagich'), 10) || 0;

//     function yangila() {
//       son.textContent = sanagich;
//       localStorage.setItem('sanagich', sanagich);
//     }

//     document.getElementById('bosish').addEventListener('click', () => {
//       sanagich++;
//       yangila();
//     });

//     document.getElementById('nol').addEventListener('click', () => {
//       sanagich = 0;
//       yangila();
//     });

//     son.textContent = sanagich;
//   </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="uz">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>3-masala. Yorug' / qorong'i rejim</title>
//   <style>
//     body { font-family: sans-serif; text-align: center; padding-top: 80px; min-height: 100vh; margin: 0;
//            background: #fff; color: #000; transition: background .2s, color .2s; }
//     body.qorongi { background: #000; color: #fff; }
//     button { padding: 12px 24px; font-size: 18px; cursor: pointer; }
//   </style>
// </head>
// <body>
//   <h1>Ertalab / qorong'i rejim</h1>
//   <button id="almashtir">Rejimni almashtirish</button>

//   <script>
//     function qoll(rejim) {
//       document.body.classList.toggle('qorongi', rejim === 'qorongi');
//     }

//     qoll(localStorage.getItem('rejim') || 'yorug');

//     document.getElementById('almashtir').addEventListener('click', () => {
//       const yangi = document.body.classList.contains('qorongi') ? 'yorug' : 'qorongi';
//       qoll(yangi);
//       localStorage.setItem('rejim', yangi);
//     });
//   </script>
// </body>
// </html>


// <!DOCTYPE html>
// <html lang="uz">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>4-masala. Sessiya xabari</title>
//   <style>
//     body { font-family: sans-serif; max-width: 480px; margin: 40px auto; padding: 0 16px; }
//     textarea, button { display: block; width: 100%; padding: 10px; margin: 8px 0; font-size: 16px; box-sizing: border-box; }
//     textarea { height: 120px; }
//   </style>
// </head>
// <body>
//   <h1>Sessiya xabari</h1>
//   <textarea id="matn" placeholder="Matn yozing..."></textarea>
//   <button id="eslab">Eslab qol</button>

//   <script>
//     const matn = document.getElementById('matn');
//     matn.value = sessionStorage.getItem('xabar') || '';

//     document.getElementById('eslab').addEventListener('click', () => {
//       sessionStorage.setItem('xabar', matn.value);
//     });
//   </script>
// </body>
// </html>