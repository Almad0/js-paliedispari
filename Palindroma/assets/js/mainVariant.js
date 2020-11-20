// CHIEDO ALL'UTENTE LA PAROLA E INSERISCO I SINGOLI CARATTERI IN UN ARRAY
var userWord = prompt("Inserisci una parola").toLowerCase();
var word = userWord.split('');

//DIVIDO L'ARRAY PAROLA A META' E RIBALTO L'ARRAY DI DESTRA
var meta = Math.floor(word.length / 2);
var sinistra = word.splice(0,meta);
var destra = word.splice(-meta);

// console.log(sinistra); console.log(destra);

destra.reverse(); // console.log(destra);

// COMPARO LE SINGOLE LETTERE
var controllo = false;
for (var i = 0; i < sinistra.length; i++) {
  if (sinistra[i] == destra [i]) {
    controllo = true;
  } else {
    controllo = false;
  }
}

//LA SECONDA CONDIZIONE è NECESSARIA, ALTRIMENTI BASTA UNA SOLA LETTERA UGUALE PER TRUE
if (controllo && i==sinistra.length ) {
  console.log("La parola è palindroma!");
} else {
  console.log("La Parola non è palindroma");
}

// VALIDO CON LE PAROLE, PER LE FRASI BISOGNA PRIMA ELIMINARE DAGLI ARRAY
// I CARATTERI "VUOTI", CIOE' GLI SPAZI
