//variables
let paraulaSecreta = document.getElementById("paraulaSecreta");
let botoContraseña = document.getElementById("mostrarContra");
let comencar = document.getElementById("començarPartida"); 
let linias = document.getElementById("linias");
let resultat = ""

function mostraPassw() {
    let contrasenya = paraulaSecreta;
    if (contrasenya.type === "password") {
        contrasenya.type = "text";
    } else {
        contrasenya.type = "password";
    }
}
function comencarPartida() {
    if(paraulaSecreta.value === "") { //arreglar
        alert("Has d'afegir una paraula per poder començar a jugar");
    }
    else if(!isNaN(paraulaSecreta.value)) {
        alert("No pot ser un número");
    }
    else if((paraulaSecreta.value.length) < 3) {
        alert("La paraula secreta ha de ser més de 3 carácters");
    }
    else if (/[0-9]/.test(paraulaSecreta.value)){
        alert("No pot contenir números");
    } else {
        botoContraseña.disabled = true;
        comencar.disabled = true;
        paraulaSecreta.disabled = true;


        espaisParaulaSecreta();
    }
} 

function espaisParaulaSecreta() { //mejorar
    if(paraulaSecreta.value.length > 3){
        resultat = "_ ".repeat(paraulaSecreta.value.length);

        linias.textContent = resultat;
    }
}

function mostrarContenidoBoton(valor){
    const lletraConte = valor.toUpperCase();

    if(paraulaSecreta.value.toUpperCase().includes(lletraConte)) {
        if(linias.length = paraulaSecreta.value) {
            linias.textContent = paraulaSecreta.value; //arreglar esto
        }
    }
}