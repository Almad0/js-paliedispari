// CHIEDO ALL'UTENTE LA PAROLA
var userWord = prompt("Inserisci una parola").toLowerCase();

console.log(userWord);

// FUNZIONE PER RIBALTARE LA STRINGA
function reWord(word) {
    return word.split("").reverse().join("");
}

var reverseWord = reWord(userWord);

// console.log(reverseWord);

if (userWord == reverseWord) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola NON è palindroma");
}
