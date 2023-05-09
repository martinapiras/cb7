// burger menu
const burgerMenu = document.querySelector(".burgerMenu");
const sidebar = document.querySelector("aside");

burgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("show");
})

// Esercitazione 1:
//     Creare un pulsante HTML e un elemento di testo vuoto come una un 'p'.
//     Aggiungere un gestore di eventi click al pulsante utilizzando il metodo addEventListener().
//     Al click dell'utente deve modificare il testo dell'elemento di testo per visualizzare un messaggio di saluto.
const button1 = document.querySelector(".button1");
const welcomeText = document.querySelector(".welcomeText");

button1.addEventListener("click", () => {
    welcomeText.textContent = "Hai cliccato! Benvenuto/a!";
})



// Esercitazione 2:
//     Creare un campo di input HTML e un pulsante.
//     Aggiungere un gestore di eventi 'submit'.
//     Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente e visualizzarlo in un elemento di testo come un 'div' o un 'p'.
const submit = document.querySelector("#submitButton");
const userText = document.querySelector(".userText");
const textOutput = document.querySelector(".textOutput");

function onSubmit(event) {
    event.preventDefault();
    textOutput.textContent = userText.value;
}

submit.addEventListener("click", onSubmit);

// Esercitazione 3 - Avanzato:
//     creare un 'input', una lista HTML 'ul' e un 'button' "Aggiungi elemento" che aggiungerà un elemento alla lista.
//     l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito
const gameList = document.querySelector("ul");
const gameSuggestion = document.querySelector(".gameSuggestion");
const button2 = document.querySelector(".button2");

button2.addEventListener("click", () => {
    const newGame = document.createElement("li");
    newGame.textContent = gameSuggestion.value;
    gameList.appendChild(newGame);
})
