// Variables globals
let paraulaSecreta = document.getElementById("paraulaSecreta");
let botoContraseña = document.getElementById("mostrarContra");
let comencar = document.getElementById("començarPartida");
let linias = document.getElementById("linias");
let resultat = "";
let jugades = document.getElementById("jugades");
let jugadesRestants = parseInt(jugades.textContent);
let jocIniciat = false;
let jocAcabat = false;
let punts = document.getElementById("punts");
let puntsSumats = parseInt(punts.textContent);
let encertsConsecutius = 0;
let totalPartides = parseInt(document.getElementById("totalPartides").textContent);
let partidesGuanyades = parseInt(document.getElementById("partidesGuanyades").textContent);
let partidaMesPunts = document.getElementById("partidaMesPunts"); // Cambiado a referencia del elemento
let maxPunts = 0; // per guardar la puntuació més alta de la partida actual
let maxPuntsTotal = 0; // per guardar la puntuació més alta de totes les partides
let penjat = document.getElementById("penjat_0");

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
            jugadesRestants = 10; // Reinicia el nombre d'intents
            jugades.textContent = jugadesRestants;
            puntsSumats = 0; // Reinicia els punts
            punts.textContent = puntsSumats;
            encertsConsecutius = 0;
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

function mostrarContenidoBoton(valor) {
    if (!jocIniciat) {
        alert("Per començar el joc introdueix una paraula i prem el botó");
        return;
    }

    const lletraConte = valor.toUpperCase();
    const paraula = paraulaSecreta.value.toUpperCase();
    let resultatArray = resultat.split(" ");
    let lletraTrobada = false;
    let comptadorLletra = 0; // comptador per veure quantes vegades apareix la lletra en la paraula

    // Itera per cada lletra de la paraula per trobar coincidències
    for (let i = 0; i < paraula.length; i++) {
        if (paraula[i] === lletraConte && resultatArray[i] === "_") {
            resultatArray[i] = lletraConte;
            lletraTrobada = true;
            comptadorLletra++;
        }
    }

    if (lletraTrobada) {
        encertsConsecutius++; // incrementa encerts consecutius
        let puntsIndividuals = encertsConsecutius * comptadorLletra; // multiplica pels caràcters que contenen la lletra
        puntsSumats += puntsIndividuals; // afegeix els punts
    } else {
        encertsConsecutius = 0; // reinicia encerts consecutius si no encertes
        puntsSumats = Math.max(0, puntsSumats - 1); // resta 1 punt sense permetre negatius
        Jugades(); // disminueix intents
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
    jugadesRestants = 10;
    jugades.textContent = jugadesRestants;
    document.getElementById("linias").style.backgroundColor = "#ffffff";
    jocIniciat = false;
    jocAcabat = false;
    puntsSumats = 0;
    punts.textContent = puntsSumats;
    encertsConsecutius = 0;
    penjat.src = `/img/penjat_0.jpg`;
}

function Jugades() {
    if (jugadesRestants <= 0) {
        return;
    }
    jugadesRestants--;
    jugades.textContent = jugadesRestants;

    penjat.src = `/img/penjat_${10 - jugadesRestants}.jpg`;
}

function GanarPerder() {
    const paraulaSecretaVal = paraulaSecreta.value.toUpperCase();
    const liniasVal = linias.textContent.replaceAll(" ", "");
    
    if (liniasVal === paraulaSecretaVal) {
        document.getElementById("linias").style.backgroundColor = "#dcfaa6";
        jocAcabat = true;
        totalPartides++; // Incrementa totalPartides quan es guanya
        partidesGuanyades++; // Incrementa partides guanyades
        
        if (puntsSumats > maxPunts) {
            maxPunts = puntsSumats; // Actualitza la puntuació màxima
            partidaMesPunts.textContent = maxPunts; // Actualitza l'element de la puntuació més alta
        }

        // Actualitza la puntuació més alta total si cal
        if (puntsSumats > maxPuntsTotal) {
            maxPuntsTotal = puntsSumats; // Actualitza la puntuació més alta total
            document.getElementById("partidaMesPunts").textContent = `Màxim: ${maxPuntsTotal}`; // Actualitza la visualització de la puntuació més alta total
        }

    } else if (jugadesRestants === 0) {
        document.getElementById("linias").style.backgroundColor = "#ff0000";
        linias.textContent = paraulaSecretaVal;
        jocAcabat = true;
        totalPartides++;
    }
    let percentatge = 0;
    if (totalPartides > 0) {
        percentatge = ((partidesGuanyades / totalPartides) * 100);
    }
    document.getElementById("percentatgeGuanyades").textContent = `(${percentatge.toFixed(2)}%)`;

    // Actualitza els elements de totalPartides i partidesGuanyades al HTML
    document.getElementById("totalPartides").textContent = totalPartides;
    document.getElementById("partidesGuanyades").textContent = partidesGuanyades;

    botoContraseña.disabled = false;
    comencar.disabled = false;
    paraulaSecreta.disabled = false;
}
