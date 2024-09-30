//constants del joc
const JUGADES_TOTALS = 20;
//variables del joc
let numJugades = JUGADES_TOTALS;
let numSecret = Math.round(Math.random() * 20) + 1; //et dona numeros random entre el 1 y el 20
let totalPunts = 0;
let numeroFinal = document.getElementById("numeroFinal");

//funcio per reinciar la partida
function reiniciaPartida() {
    numJugades = JUGADES_TOTALS;

    document.getElementById("numEscollit").value = null;
    document.getElementById("petit_gran").innerHTML = "Comencem la partida...";
    document.getElementById("numContador").textContent = numJugades;
    document.getElementById("reinicia").disabled = true; //deshabilita el botó reinicia
    numSecret = Math.round(Math.random() * 20) + 1;
    numeroFinal.innerHTML = "?";
    document.body.style.backgroundColor = "black"; //torna al color original

}
//funcio 2 per jugar
function jugada() {
    let numEscollit = parseInt(document.getElementById("numEscollit").value);

    if (numJugades <= 0) { //per evitar que doni números negatius
        return;
    }

    if (numEscollit > 0 && numEscollit <= 20) { //aquesta condició es compleix quan el numero posat es major a 0 i menor o igual a 20
        //desincrementar una jugada
        numJugades--;
        document.getElementById("numContador").textContent = numJugades;

        
        if (numEscollit < numSecret) { //condició de si es compleix que el numero escollit es menor al número secret
            document.getElementById("petit_gran").innerHTML = "El número és massa petit"; //canvia el text de "Comencem la partida..." quan el número es petit
            document.getElementById("reinicia").disabled = true; //per que el botó reinicia estigui deshabilitat fins que acabi la partida o es perdi 

        }
        else if (numEscollit == numSecret) { //condició de si es compleix que el numero escollit es igual al número secret
            document.getElementById("petit_gran").innerHTML = "El número és correcte";
            document.getElementById("reinicia").disabled = false;
            numeroFinal.innerHTML = numSecret; //que mostri per pantalla el número secret quan es guanyi
            document.body.style.backgroundColor = "green"; //quan s'encerta el color del fons es torna verd
            if (numJugades > totalPunts) {
                document.getElementById("puntsTotals").innerHTML = numJugades;
                totalPunts = numJugades;
            }
        }
        else if (numJugades > numSecret) { //condició de si es compleix que el numero de jugades es major al número secret
            document.getElementById("petit_gran").innerHTML = "El número és massa gran";
            document.getElementById("reinicia").disabled = true;

        }
        if (numJugades === 0) { //condició de si es compleix que el numero de jugades es 0
            document.getElementById("petit_gran").innerHTML = "Final de la partida";
            numeroFinal.innerHTML = numSecret; //que mostri per pantalla el número secret quan es perdi
            document.getElementById("reinicia").disabled = false; 
            document.body.style.backgroundColor = "red"; //quan falla es torna de color vermell
        }

    } else {
        alert("No has introduit cap valor"); //si introdueixes un 0 o un altre valor (número negatiu, lletra, carácter especial, etc.)
    }
    /*
        console.log(numJugades, typeof numJugades);
    
        console.log(numEscollit);
    
        console.log("numero secret " + numSecret);
    
        console.log("JUGADAS: " + (document.getElementById("numContador").textContent));
    */
}