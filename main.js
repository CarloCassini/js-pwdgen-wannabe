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

questa la parte separata
<h1> nome ${firstName} </h1>
<h1> cognome ${surname} </h1>
<h1> colore preferito ${color} </h1>
<h1> numero ${index} </h1>

`;
