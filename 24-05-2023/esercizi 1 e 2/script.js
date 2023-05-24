// ESERCIZIO 1 + AVANZATO
let persona = ["Mario", "Rossi", "Italia"];

let [firstname, lastname, country] = persona;

let persona2 = ["Guido", "Bianchi"];

console.log("***persona***");
console.log("Nome: " + firstname);
console.log("Cognome: " + lastname);
console.log("Paese: " + country);

let [
  firstname2 = "Non specificato",
  lastname2 = "Non specificato",
  country2 = "Non specificato",
] = persona2;

console.log("***persona2***");
console.log("Nome: " + firstname2);
console.log("Cognome: " + lastname2);
console.log("Paese: " + country2);

// ESERCIZIO 2 + AVANZATO
let book = { titolo: "Il Nome della Rosa", autore: "Umberto Eco", anno: 1980 };

let { titolo, autore, anno } = book;

console.log("***book***");
console.log("Titolo: " + titolo);
console.log("Autore: " + autore);
console.log("Anno: " + anno);

let book2 = { titolo2: "Il regno di cenere", autore2: "Sarah J. Maas" };

let {
  titolo2 = "Non specificato",
  autore2 = "Non specificato",
  anno2 = "Non specificato",
} = book2;

console.log("***book2***");
console.log("Titolo: " + titolo2);
console.log("Autore: " + autore2);
console.log("Anno: " + anno2);
