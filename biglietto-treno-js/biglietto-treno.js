// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
// regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

// RACCOLTA DATI
const price = 0.21;
console.log("price", price);
const age = parseInt(prompt("Quanti anni hai?"));
console.log("age", age);
const km = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log("km", km);
const ticketFullPrice = km * price;
console.log("ticketFullPrice", ticketFullPrice);
let ticketFinalPrice;

//SVOLGIMENTO
if (age < 18) {
  ticketFinalPrice = ((ticketFullPrice * 20) / 100).toFixed(2);
} else if (age > 65) {
  ticketFinalPrice = ((ticketFullPrice * 60) / 100).toFixed(2);
} else {
  ticketFinalPrice = ticketFullPrice.toFixed(2);
}

console.log("ticketFinalPrice", ticketFinalPrice);
alert("Dovrai pagare " + ticketFinalPrice + "€");
