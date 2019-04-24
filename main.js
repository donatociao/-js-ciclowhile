//creo un array con i cognomi degli utenti
var elenco = ["ancona", "bali", "cervo", "dati", "elano", "fabbri"];

//creo un prompt per la richiesta del cognome
var surname = prompt ("Inserisci il tuo cognome");

//inserisco il cognome nell'array
elenco.push(surname);

//ordino i cognomi
elenco.sort()



//dichiaro variabile posizione
var posizione = (elenco.indexOf(surname) + 1);

document.writeln("I cognomi in lista sono:" );

//dichiaro e inizializzo indice
var j = 0;

while (j < elenco.length){

  //stampo i cognomi ordinati
  document.writeln(" </br>" + elenco[j]);

  //incremento indice
  j++; }

//stampo la posizione del nuovo cognome inserito
document.writeln("</br>Il tuo cognome è in posizione " + posizione + ".");
