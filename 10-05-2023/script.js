// Esercizio 2
// Utilizzando callbacks, ricreare la calcolatrice in forma base includendo il DOM

const numberOneEl = document.querySelector(".numberOne").value;
const numberTwoEl = document.querySelector(".numberTwo").value;
const operatorEl = document.querySelector(".operator").value;
const submitEl = document.querySelector(".submit");
const resultNumberEl = document.querySelector(".resultNumber");

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (num1, num2, operation) => operation(num1, num2);

if (operatorEl === "+") {
  submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    return (resultNumberEl.textContent = calculator(
      parseFloat(numberOneEl),
      parseFloat(numberTwoEl),
      sum
    ));
  });
} else if (operatorEl === "-") {
  submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    return (resultNumberEl.textContent = calculator(
      parseFloat(numberOneEl),
      parseFloat(numberTwoEl),
      sub
    ));
  });
} else if (operatorEl === "*") {
  submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    return (resultNumberEl.textContent = calculator(
      parseFloat(numberOneEl),
      parseFloat(numberTwoEl),
      mult
    ));
  });
} else if (operatorEl === "/") {
  submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    return (resultNumberEl.textContent = calculator(
      parseFloat(numberOneEl),
      parseFloat(numberTwoEl),
      div
    ));
  });
}
