let myNumber = parseInt(
  prompt("Scegli un numero e io ti dirò se è pari o dispari")
);

myNumber % 2 === 0
  ? console.log(`${myNumber} è pari!`)
  : console.log(`${myNumber} è dispari!`);
