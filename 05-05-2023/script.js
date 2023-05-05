// ESERCIZIO 2
// Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.

// let firstNumber;
// let secondNumber;
// let operator;
// let result;

// function calculator() {
//   firstNumber = parseFloat(prompt("Scegli il primo numero"));
//   operator = prompt("Scegli un operatore: +, -, * o /");
//   secondNumber = parseFloat(prompt("Scegli il secondo numero"));

//   switch (operator) {
//     case "+":
//       result = firstNumber + secondNumber;
//       return confirm(`Il risultato è ${result}`);
//       break;
//     case "-":
//       result = firstNumber - secondNumber;
//       return confirm(`Il risultato è ${result}`);
//       break;
//     case "*":
//       result = firstNumber * secondNumber;
//       return confirm(`Il risultato è ${result}`);
//       break;
//     case "/":
//       result = firstNumber / secondNumber;
//       return confirm(`Il risultato è ${result}`);
//   }
// }

// calculator();


///////////////////////////////////////////////////////////////////
// ESERCIZIO 3
// Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni.
const infoMartina = {
    name: "Martina",
    age: 26,
    city: "Villacidro",
    hobby: "videogames",
    profession: "translator"
}

console.log(infoMartina);
console.log(infoMartina.city);
console.log(infoMartina["name"]);
console.log(infoMartina.profession);

infoMartina.favSinger = "Elisa";
console.log(infoMartina.favSinger);


///////////////////////////////////////////////////////////////////
// ESERCIZIO AVANZATO
// Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.

const firstNumber = parseFloat(prompt("Scegli il primo numero"));
const operator = prompt("Scegli un operatore: +, -, * o /");
const secondNumber = parseFloat(prompt("Scegli il secondo numero"));

function sum() {
  return firstNumber + secondNumber;
}

function subtraction() {
  return firstNumber - secondNumber;
}

function multiplication() {
  return firstNumber * secondNumber;
}

function division() {
  return firstNumber / secondNumber;
}

function calculator() {
  if (operator === "+") {
    result = sum();
    return confirm(`Il risultato è ${result}`);
  } else if (operator === "-") {
    result = subtraction();
    return confirm(`Il risultato è ${result}`);
  } else if (operator === "*") {
    result = multiplication();
    return confirm(`Il risultato è ${result}`);
  } else if (operator === "/") {
    result = division();
    return confirm(`Il risultato è ${result}`);
  } else {
    return alert("Leggi bene le istruzioni!");
  }
}

calculator();