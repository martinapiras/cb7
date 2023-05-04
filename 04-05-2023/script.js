// Esercizio 1
// Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo reverse().
let pokemonTeam = ["Lucario", "Tinkaton", "Meowscarada", "Talonflame", "Clodsire", "Noivern"];
let pokemonTeamInverted = [];

for (i = pokemonTeam.length - 1; i >= 0; i--) {
    let inverted = pokemonTeam[i];
    pokemonTeamInverted.push(inverted);
}

console.log(pokemonTeamInverted);



// Esercizio 2
// Dato un array di numeri, stampare il velore minimo e massimo
let numberArray = [12, 2, 18, 3, 2890, 335];
numberArray.sort((a, b) => a - b);
console.log("Il numero più piccolo è", numberArray[0]);
console.log("Il numero più grande è", numberArray[numberArray.length - 1]);
