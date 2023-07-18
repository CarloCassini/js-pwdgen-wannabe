let firstName;
let surname;
let color;
const index = 21;

// parte in cui si chiedono i dati:

firstName = prompt("inserisci il tuo nome");
surname = prompt("inserisci il tuo cognome");
color = prompt("inserisci il tuo colore preferito");

// alt + 96 serve per mettere ste lineette
// che permettono di scrivere su più righe e dare ugualemnte
// valore alla variabili js

const MessageToDisplay = `
<h1> nome <span>${firstName}</span> </h1>
<h1> cognome <span>${surname}</span> </h1>
<h1> colore preferito <span>${color}</span> </h1>
<h1> numero <span>${index}</span> </h1>
`;

// collegamento per trascrivere il risultato sul div
//  "id=message-to-read"

document.getElementById("message-to-read").innerHTML = MessageToDisplay;
