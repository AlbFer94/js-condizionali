
let ora = new Date().getHours();

if (ora <= 12) {
    document.getElementById("es_uno").innerHTML = `Sono le ${ora}, Buongiorno!`;
} else if (ora <= 18) {
    document.getElementById("es_uno").innerHTML = `Sono le ${ora}, Buon Pomeriggio!`;;
} else {
    document.getElementById("es_uno").innerHTML = `Sono le ${ora}, Buonasera!`;
}

/* Secondo esercizio:Chiedi all'utente il nome della sua città con un valore di default. Se ha risposto, mostra un messaggio di saluto con la città; altrimenti mostra un messaggio alternativo. */

let nome = prompt("Da quale città vieni?");

if (nome) {
    document.getElementById("es_due").innerHTML = `Bellissima città ${nome}!`;
} else {
    document.getElementById("es_due").innerHTML = "Non hai inserito la città, Ricarica la pagina.";
}

/* Terzo esercizio:Crea due variabili: biglietto (boolean) e eta (numero). Mostra "Benvenuto" solo se l'utente ha il biglietto ed è maggiorenne. */

let biglietto = prompt("Se hai il biglietto digita 1, altrimenti digita 0");
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