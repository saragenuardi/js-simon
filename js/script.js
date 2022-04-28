//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//Crea array vuoto
const numberRandom = [];

//Genera un numero causale per 5 volte con ciclo FOR
for (let index = 1; index <= 5; index++) {
    const singleNumber = getRndInteger(1, 100);
    numberRandom.push(singleNumber);  //WHILE
}

//Visualizza i numeri casuali su HTML
document.getElementById("numero-casuale").innerHTML = "I 5 numeri casuali sono " + numberRandom;

//Genera un timer di 30 secondi
const countTimer = document.getElementById("timer");
let count = 5;
 
const timer = setInterval(function() {
    count--;
    countTimer.innerHTML = "Restano " + count + " secondi";

    if (count === 0) {
        // nascondere i numeri
        document.getElementById("numero-casuale").innerHTML = "";


        const userNumberSave = []
        //Chiedi all'utente, di inserire uno alla volta, i numeri random generati  precendentemente, tramite il prompt
        for (let index = 1; index <= 5; index++) {
            const userNumber = prompt("Inserisci il numero visualizzato precendetemente");
            //Salva i numeri inseriti dall'utente dentro l'array
            userNumberSave.push(userNumber);
            console.log(userNumberSave);
            //Controlla se i numeri inseriti dall'utente sono stati indovinati, e quindi uguali, ai numeri generati random dal PC
            checkNumbers(userNumberSave)

         }
         
        
       

        // quanti numeri ha indovinato?

        
        clearInterval(timer);
    }
}, 1000);


//FUNCTIONS

function checkNumbers(userNumbers) {
    

}





//Funzione per generare numeri random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




