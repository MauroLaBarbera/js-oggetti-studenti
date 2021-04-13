/**
 * 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 */

// //1. CREAZIONE OGGETTO STUDENTE
// var studente = {
//     nome: 'Mario',
//     cognome: 'Rossi',
//     età: '31',
// }
// console.log(studente);

// //STAMPARE PROPRIETA' OGGETTO
// for (var key in studente) {
// // console.log(studente[key]);
// console.log(key , studente[key]);
// }


/**
 * 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 */
var studenti = [
    {
        nome: 'Anna',
        cognome: 'Oxa',
    },
    {
        nome: 'Lucio',
        cognome: 'Dalla',
    },
    {
        nome: 'Ciccio',
        cognome: 'Pasticcio',
    },
    {
        nome: 'Herbert',
        cognome: 'Ballerina',
    },
    {
        nome: 'Emily',
        cognome: 'Rose',
    }
];

//ITERAZIONE
for (var i = 0; i < studenti.length; i++) {
    var datiStudenti = studenti[i];
    console.log(datiStudenti.nome, datiStudenti.cognome);
}



/**
 * 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
 *  Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
 */