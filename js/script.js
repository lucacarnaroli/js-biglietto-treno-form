// variabili
// var nomePax = ("Nome e cognome")
// var kmDaPercorrere = ('Quanti km devi percorrere?');
// var etaPasseggero = ('Quanti anni hai?');
// prezzotratta
// var prezzoTratta = kmDaPercorrere * 0.21;
// // sconti
// if (etaPasseggero < 18) {
//   console.log (prezzoTratta - prezzoTratta * 20 / 100);
//   prezzoTratta = prezzoTratta - prezzoTratta * 20 / 100;
// } else if (etaPasseggero > 65) {
//   console.log(prezzoTratta - prezzoTratta * 40 / 100);
//   prezzoTratta = prezzoTratta - prezzoTratta * 40 / 100;
// } else {
//   console.log (prezzoTratta);
// }
// html
// document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;


var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
 function() {
  var nomeInput = document.getElementById('nome-pax');
  var nome = nomeInput.value;
  console.log(nome);

  var inputKm = document.getElementById('km');
  var kmDaPercorrere = parseInt(inputKm.value);
  console.log(kmDaPercorrere);

  var fasciaEta = document.getElementById('fascia-età');
  var inputFasciaEta = fasciaEta.value;
  console.log(inputFasciaEta);

  var prezzoTratta = kmDaPercorrere * 0.21;
  var offerta = 'Tariffa Standard';
  var carrozza = Math.floor(Math.random() * 9) + 1;
  var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

  if (inputFasciaEta == 'minorenne') {
    console.log (prezzoTratta - prezzoTratta * 20 / 100);
    prezzoTratta = prezzoTratta - prezzoTratta * 20 / 100;
    offerta = 'Sconto Minorenne';
  } else if (inputFasciaEta == 65) {
    console.log(prezzoTratta - prezzoTratta * 40 / 100);
    prezzoTratta = prezzoTratta - prezzoTratta * 40 / 100;
    offerta = 'Sconto Silver';
  } else {
    console.log (prezzoTratta);
  }
  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo-biglietto').innerHTML = prezzoTratta.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = cp;
  // var bigliettoDiv = document.getElementById('bigliettodiv');
  // bigliettoDiv.classList.remove('show');
  // bigliettoDiv.classList.add('show');
}
);

var btnAnnulla = document.getElementById('annulla');
btnAnnulla.addEventListener('click',
function () {
  // var bigliettoDiv = document.getElementById('bigliettodiv');
  // bigliettoDiv.classList.remove('hidden');
  // bigliettoDiv.classList.add('hidden');
  document.getElementById('nome-passeggero').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('costo-biglietto').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice-cp').innerHTML = '';

  document.getElementById('nome-pax').innerHTML = '';
  document.getElementById('km').innerHTML = '';
  document.getElementById('fascia-età').innerHTML = '';
 }
);
