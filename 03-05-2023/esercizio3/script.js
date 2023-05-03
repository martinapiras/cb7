let operator = prompt(
  "Scegli un'operazione: addizione, sottrazione, moltiplicazione o divisione"
).toLowerCase();

let firstNumber = parseInt(prompt("Scegli il primo numero"));
let secondNumber = parseInt(prompt("Scegli il secondo numero"));

switch (operator) {
    case "addizione":
        console.log(firstNumber + secondNumber);
        break;
    case "sottrazione":
        console.log(firstNumber - secondNumber);
        break;
    case "moltiplicazione":
        console.log(firstNumber * secondNumber);
        break;
    case "divisione":
        console.log(firstNumber / secondNumber);
        break;
}