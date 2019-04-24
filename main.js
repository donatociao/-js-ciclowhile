//creo un array con i cognomi degli utenti
var elenco = ["ancona", "bali", "cervo", "dati", "elano", "fabbri"];

//creo un prompt per la richiesta del cognome
var surname = prompt ("Inserisci il tuo cognome");

//dichiaro index
var i = 0;

//dichiaro variabile booleana
var insert = false;

//controllo se il cognome è già presente in elenco
while (i < elenco.length){

  //se presente cambio variabile booleana
  if (elenco[i] === surname) {
    insert = true;
  }
  i++;
}

//se il cognome non è già presente in lista
if (insert == false) {

  //dico che il cognome è stato inserito in lista
  document.writeln("Il cognome è stato inserito nella lista.</br>")

  //inserisco il cognome nell'array
  elenco.push(surname);

  //ordino i cognomi
  elenco.sort()
} else {

  //se il cognome è già presente in lista
  document.writeln("Il cognome è già presente nella lista.</br>")
}

//dichiaro variabile posizione
var posizione = (elenco.indexOf(surname) + 1);

document.writeln("I cognomi in lista sono:" );

//dichiaro index
var j = 0;

while (j < elenco.length){

  //stampo i cognomi ordinati
  document.writeln(" </br>" + elenco[j]);

  //incremento indice
  j++;
}

//stampo la posizione del nuovo cognome inserito
document.writeln("</br>Il cognome " + surname + " è in posizione " + posizione + ".");
