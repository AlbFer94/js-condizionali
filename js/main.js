
/* Secondo esercizio:Chiedi all'utente il nome della sua città con un valore di default. Se ha risposto, mostra un messaggio di saluto con la città; altrimenti mostra un messaggio alternativo. */

/* let nome = prompt("Da quale città vieni?");

if (nome) {
    document.getElementById("es_due").innerHTML = `Bellissima città ${nome}!`;
} else {
    document.getElementById("es_due").innerHTML = "Non hai inserito la città, Ricarica la pagina.";
}
 */
/* Terzo esercizio:Crea due variabili: biglietto (boolean) e eta (numero). Mostra "Benvenuto" solo se l'utente ha il biglietto ed è maggiorenne. */

/* let biglietto = prompt("Se hai il biglietto digita 1, altrimenti digita 0");
let età = prompt("Quanti hanni hai?");

if (biglietto >= 1) {
    if (età >= 18) {
        document.getElementById("es_tre").innerHTML = "Benvenuto!";
    } else {
        document.getElementById("es_tre").innerHTML = " Hai il biglietto ma non sei maggiorenne";
    }
} else {
    document.getElementById("es_tre").innerHTML = "non hai il biglietto";
}
 */
/* Quarto esercizio:Crea una variabile codice con il valore stringa "1234" e confrontala con il numero 1234 prima con == e poi con ===. Stampa un messaggio diverso per ciascun caso. */

/* let codice = 1234;
let stringa = "1234";

if (codice == stringa) {
    console.log("il confronto debole è true");
} if (codice !== stringa) {
    console.log("questo non è uguale");
}
 */
/* Quinto esercizio:Chiedi un nome con prompt(). Se l'utente ha scritto qualcosa, mostra un saluto; altrimenti mostra un messaggio di errore. */

/* let risposta = "";
let name = prompt("Come ti chiami?");

risposta = name;

if (risposta) {
    document.getElementById("es_cinque").innerHTML = `Ciao ${risposta}!`;
} else {
    document.getElementById("es_cinque").innerHTML = "Nessun Nome indicato";
}
 */
/* Sesto esercizio:Crea due variabili booleane: luceAccesa e personePresenti. Mostra "Stanza occupata" se entrambe sono vere, oppure "Stanza libera" se entrambe sono false. */

/* let luceAccesa = true;
let personePresenti = true;

if (luceAccesa && personePresenti) {
    console.log("Stanza Occupata");
} else if (!luceAccesa && !personePresenti) {
    console.log("Stanza Libera");
} else if (!luceAccesa || !personePresenti) {
    console.log("Non è sicuro sia libera");
}
 */

/* Esercizio Finale */

let name = prompt("Tuo nome");
let età = prompt("Quanti hanni hai?");
let converted = Number(età);
let messaggio = "";

random = Math.floor(Math.random() * 101);

if (name) {
    messaggio = "ciao " + name;
    if (converted >= 18) {
        messaggio = "Ciao " + name + " sei maggiorenne";
    } else {
        messaggio = "Ciao " + name + " sei minorenne";
    }
    if (random > 90 || converted > 60) {
        messaggio = " Ciao " + name + " numero fortunato " + random;
    }
} else {
    messaggio = "nome mancante";
}

console.log(messaggio);