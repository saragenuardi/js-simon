//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//Crea array vuoto
const numberRandom = [];

//Genera un numero causale per 5 volte con ciclo FOR
for (let index = 0; index < 5; index++) {
    const singleNumber = getRndInteger(1, 100);
    numberRandom.push(singleNumber); 
}

//Visualizza i numeri casuali su HTML
document. getElementById("numero-casuale").innerHTML = "I 5 numeri casuali sono " + numberRandom;

//Genera un timer di 30 secondi
const countTimer = document.getElementById("timer");
let count  = parseInt(countTimer.textContent);
console.log(countTimer)
 
const timer = setInterval(function() {
    count--;
    if(count === 0) {
        clearInterval(timer);
        countTimer.innerHTML = "Al timer restano"
    }
}, 1000);

//Chiedi all'utente, di insserire uno alla volta, i numeri random generati  precendentemente, tramite il prompt


//FUNCTIONS

//Funzione per generare numeri random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




