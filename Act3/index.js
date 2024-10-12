//variables
let paraulaSecreta = document.getElementById("paraulaSecreta");
let botoContraseña = document.getElementById("mostrarContra");
let comencar = document.getElementById("començarPartida");
let linias = document.getElementById("linias");
let resultat = ""
let jugades = document.getElementById("jugades");
let jugadesRestants = parseInt(jugades.textContent);
let jocIniciat = false;
let jocAcabat = false;

function mostraPassw() {
    let contrasenya = paraulaSecreta;
    if (contrasenya.type === "password") {
        contrasenya.type = "text";
    } else {
        contrasenya.type = "password";
    }
}

function comencarPartida() {
    if (!jocIniciat) {
        if (paraulaSecreta.value === "") {
            alert("Has d'afegir una paraula per poder començar a jugar");
        }
        else if (!isNaN(paraulaSecreta.value)) {
            alert("No pot ser un número");
        }
        else if ((paraulaSecreta.value.length) < 3) {
            alert("La paraula secreta ha de ser més de 3 carácters");
        }
        else if (/[0-9]/.test(paraulaSecreta.value)) {
            alert("No pot contenir números");
        } else {
            jocIniciat = true;
            jocAcabat = false;
            botoContraseña.disabled = true;
            comencar.disabled = true;
            paraulaSecreta.disabled = true;
            espaisParaulaSecreta();
        }
    } else if (jocAcabat){
        resetearJoc();
    }
}

function espaisParaulaSecreta() {
    if (paraulaSecreta.value.length > 3) {
        resultat = "_ ".repeat(paraulaSecreta.value.length);
        linias.textContent = resultat;
    }
}

function mostrarContenidoBoton(valor) {
    const lletraConte = valor.toUpperCase();
    const paraula = paraulaSecreta.value.toUpperCase();
    let resultatArray = resultat.split(" ");

    let lletraTrobada = false;
    for (let i = 0; i < paraula.length; i++) {
        if (paraula[i] === lletraConte) {
            resultatArray[i] = lletraConte;
            lletraTrobada = true;
        }
    }
    resultat = resultatArray.join(" ");
    linias.textContent = resultat;

    if (!lletraTrobada) {
        Jugades();
    }

    GanarPerder();
}

function resetearJoc() {
    botoContraseña.disabled = false;
    comencar.disabled = false;
    paraulaSecreta.disabled = false;
    linias.textContent = " ";
    paraulaSecreta.value = "";
    jugadesRestants = 10;
    jugades.textContent = jugadesRestants;
    document.getElementById("linias").style.backgroundColor = "#ffffff";
    jocIniciat = false;
    jocAcabat = false;
}

function Jugades() {
    if (jugadesRestants <= 0) {
        return;
    }
    jugadesRestants--;
    jugades.textContent = jugadesRestants;
}

function GanarPerder() {
    const paraulaSecretaVal = paraulaSecreta.value.toUpperCase();
    const liniasVal = linias.textContent.replace(/\s+/g, ""); //???
    if (liniasVal === paraulaSecretaVal) {
        document.getElementById("linias").style.backgroundColor = "#dcfaa6";
        jocAcabat = true;
    } else if (jugadesRestants === 0) {
        document.getElementById("linias").style.backgroundColor = "#ff0000";
        linias.textContent = paraulaSecretaVal;
        jocAcabat = true;
    }
    botoContraseña.disabled = false;
    comencar.disabled = false;
    paraulaSecreta.disabled = false;
}