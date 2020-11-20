// FUNZIONE DI GENERAZONE NUMERO RANDOM
function randomNum (max, min){
  return parseInt(Math.random() * (max - min) + min);
}

// FUNZIONE PARI E DISPARI
function PariDispari(num1, num2) {
  var somma = num1 + num2;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// FUNZIONE PER TRASFORMARE L'INPUT IN VALORE BOOLEANO
function booleanInput (word){
  if (word == "P") {
    return true;
  } else if (word == "D"){
    return false;
  }
}


var userEvenOdd = prompt("Scegli, pari o dispari (P/D)").toUpperCase();
var userNum = Number(prompt("Inserisci un numero da uno a cinque"));

// RICHIAMO LE FUNIONI
var pcNum = randomNum(1, 6);
var userChoice = booleanInput(userEvenOdd)
var risultato = PariDispari (userNum, pcNum);
// console.log(userNum);
// console.log(pcNum);
// console.log(userChoice);
// console.log(risultato);

// SCELGO CHI A VINTO TRAMITE VALORI BOOLEANI
if (userChoice == risultato) {
  console.log("Hai vinto, bravo!");
} else {
  console.log("Hai perso, fai schifo");
};
