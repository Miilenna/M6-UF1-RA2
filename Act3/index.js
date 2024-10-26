// Variables globals
let paraulaSecreta = document.getElementById("paraulaSecreta");
let botoContraseña = document.getElementById("mostrarContra");
let comencar = document.getElementById("començarPartida");
let linias = document.getElementById("linias");
let resultat = "";
let jocIniciat = false;
let jocAcabat = false;
let punts = document.getElementById("punts");
let puntsSumats = parseInt(punts.textContent);
let encertsConsecutius = 0;
let totalPartides = parseInt(document.getElementById("totalPartides").textContent);
let partidesGuanyades = parseInt(document.getElementById("partidesGuanyades").textContent);
let partidaMesPunts = document.getElementById("partidaMesPunts");
let maxPunts = 0;
let maxPuntsTotal = 0;
let penjat = document.getElementById("penjat_0");
let jugadesRestants = 10; // Nuevas jugadas restantes
const botons = document.querySelectorAll(".buttonLletres");


function inicialitzarBotons(){
    botons.forEach((boton) =>{
        boton.disabled = true;
        boton.style.border = "1px solid red";
        boton.style.borderRadius = "4px";
        boton.style.backgroundColor = "#cbfc71";
        boton.style.color = "red";
    });
}

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
        } else if (!isNaN(paraulaSecreta.value)) {
            alert("No pot ser un número");
        } else if ((paraulaSecreta.value.length) < 3) {
            alert("La paraula secreta ha de ser més de 3 carácters");
        } else if (/[0-9]/.test(paraulaSecreta.value)) {
            alert("No pot contenir números");
        } else {
            jocIniciat = true;
            jocAcabat = false;
            botoContraseña.disabled = true;
            comencar.disabled = true;
            paraulaSecreta.disabled = true;
            espaisParaulaSecreta();
            puntsSumats = 0;
            punts.textContent = puntsSumats;
            encertsConsecutius = 0;
            jugadesRestants = 10; // Reiniciar jugadas restantes al comenzar
            penjat.src = `/img/penjat_0.jpg`; // Restablecer la imagen
            botons.forEach((boton) =>{
                boton.disabled = false;
                boton.style.border = "1px solid black";
                boton.style.borderRadius = "4px";
                boton.style.backgroundColor = "#cbfc71";
                boton.style.color = "black";
            });
        }
    } else if (jocAcabat) {
        resetearJoc();
    }
}
function espaisParaulaSecreta() {
    if (paraulaSecreta.value.length > 3) {
        resultat = "_ ".repeat(paraulaSecreta.value.length);
        linias.textContent = resultat;
    }
}

function mostrarContenidoBoton(valor, boton) {
    const lletraConte = valor.toUpperCase();
    const paraula = paraulaSecreta.value.toUpperCase();
    let resultatArray = resultat.split(" ");
    let lletraTrobada = false;
    let comptadorLletra = 0;

    for (let i = 0; i < paraula.length; i++) {
        if (paraula[i] === lletraConte && resultatArray[i] === "_") {
            resultatArray[i] = lletraConte;
            lletraTrobada = true;
            comptadorLletra++;
        }
    }

    boton.disabled = true;
    boton.style.border = "1px solid red";
    boton.style.borderRadius = "4px";
    boton.style.backgroundColor = "#cbfc71";
    boton.style.color = "red";

    if (lletraTrobada) {
        encertsConsecutius++;
        let puntsIndividuals = encertsConsecutius * comptadorLletra;
        puntsSumats += puntsIndividuals;
    
    } else {
        encertsConsecutius = 0;
        puntsSumats = Math.max(0, puntsSumats - 1);
        jugadesRestants--; // Reducir jugadas restantes si la letra no está en la palabra
        penjat.src = `/img/penjat_${10 - jugadesRestants}.jpg`; // Actualizar imagen
    }
    resultat = resultatArray.join(" ");
    linias.textContent = resultat;
    punts.textContent = puntsSumats;

    GanarPerder();
}

function resetearJoc() {
    botoContraseña.disabled = false;
    comencar.disabled = false;
    paraulaSecreta.disabled = false;
    linias.textContent = " ";
    paraulaSecreta.value = "";
    document.getElementById("linias").style.backgroundColor = "#ffffff";
    jocIniciat = false;
    jocAcabat = false;
    puntsSumats = 0;
    punts.textContent = puntsSumats;
    encertsConsecutius = 0;
    jugadesRestants = 10;
    penjat.src = `/img/penjat_0.jpg`;
    botons.forEach((boton) =>{
        boton.disabled = true;
        boton.style.border = "1px solid red";
        boton.style.borderRadius = "4px";
        boton.style.backgroundColor = "#cbfc71";
        boton.style.color = "red";
    });
}

function GanarPerder() {
    const paraulaSecretaVal = paraulaSecreta.value.toUpperCase();
    const liniasVal = linias.textContent.replaceAll(" ", "");
    
    if (liniasVal === paraulaSecretaVal) {
        document.getElementById("linias").style.backgroundColor = "#dcfaa6";
        jocAcabat = true;
        totalPartides++;
        partidesGuanyades++;
        
        if (puntsSumats > maxPunts) {
            maxPunts = puntsSumats;
            partidaMesPunts.textContent = maxPunts;
        }

        if (puntsSumats > maxPuntsTotal) {
            maxPuntsTotal = puntsSumats;
            document.getElementById("partidaMesPunts").textContent = maxPuntsTotal;
        }
        botons.forEach((boton) =>{
            boton.disabled = true;
        });
        comencar.disabled = false;
        botoContraseña.disabled = false;
    } else if (jugadesRestants === 0) {
        document.getElementById("linias").style.backgroundColor = "#ff0000";
        linias.textContent = paraulaSecretaVal;
        jocAcabat = true;
        totalPartides++;
        botons.forEach((boton) =>{
            boton.disabled = true;
        });
        comencar.disabled = false;
        botoContraseña.disabled = false;
    }

    let percentatge = 0;
    if (totalPartides > 0) {
        percentatge = ((partidesGuanyades / totalPartides) * 100);
    }
    document.getElementById("percentatgeGuanyades").textContent = `(${percentatge.toFixed(2)}%)`;

    document.getElementById("totalPartides").textContent = totalPartides;
    document.getElementById("partidesGuanyades").textContent = partidesGuanyades;

    botoContraseña.disabled = false;
    paraulaSecreta.disabled = false;
}
