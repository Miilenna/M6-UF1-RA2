//variables
let paraulaSecreta = document.getElementById("paraulaSecreta");


function mostraPassw() {
    let contrasenya = paraulaSecreta;
    if (contrasenya.type === "password") {
        contrasenya.type = "text";
    } else {
        contrasenya.type = "password";
    }
}
function comencarPartida() {
    if(!isNaN(paraulaSecreta.value)) {
        alert("No pot ser un número");
    }
    else if((paraulaSecreta.value.length) < 3) {
        alert("La paraula secreta ha de ser més de 3 carácters");
    }
    else if(paraulaSecreta.value.contains(" ")) { //arreglar
        alert("Has d'afegir una paraula per poder començar a jugar");
    }
    else if (paraulaSecreta.includes(isNaN).value){
        alert("No pot contenir un número");
    }
}