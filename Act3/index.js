// Variables y constantes
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
let penjat = document.getElementById("penjat_0"); // Imagen del estado del juego
let jugadesRestants = 10;
const botons = document.querySelectorAll(".buttonLletres");

//Inicializa los botones de las letras
function inicialitzarBotons(){
    botons.forEach((boton) =>{
        boton.disabled = true; //deshabilitar los botones
        boton.style.border = "1px solid red";
        boton.style.borderRadius = "4px";
        boton.style.backgroundColor = "#cbfc71";
        boton.style.color = "red";
    });
}

//Función para mostrar/ocultar la contraseña
function mostraPassw() {
    let contrasenya = paraulaSecreta;
    if (contrasenya.type === "password") {
        contrasenya.type = "text";
    } else {
        contrasenya.type = "password";
    }
}

//Función que se ejecuta al darle al botón de començar partida
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
            jugadesRestants = 10; 
            penjat.src = `img/penjat_0.jpg`; // Restablecer la imagen
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

//Función que inicializa los espacios de la palabra secreta
function espaisParaulaSecreta() {
    if (paraulaSecreta.value.length > 3) {
        resultat = "_ ".repeat(paraulaSecreta.value.length); // Crea un string con los espacios correspondientes
        linias.textContent = resultat; // Muestra los espacios en el elemento
    }
}

//Muestra el contenido del botón que se ha apretado
function mostrarContenidoBoton(valor, boton) {
    const lletraConte = valor.toUpperCase();
    const paraula = paraulaSecreta.value.toUpperCase();
    let resultatArray = resultat.split(" ");
    let lletraTrobada = false;
    let comptadorLletra = 0;

    //Verifica si la letra está en la palabra
    for (let i = 0; i < paraula.length; i++) {
        if (paraula[i] === lletraConte && resultatArray[i] === "_") {
            resultatArray[i] = lletraConte; // Reemplaza el espacio por la letra encontrada
            lletraTrobada = true;
            comptadorLletra++; // Incrementa el contador de letras encontradas
        }
    }

    // Actualiza el estado del botón presionado
    boton.disabled = true;
    boton.style.border = "1px solid red";
    boton.style.borderRadius = "4px";
    boton.style.backgroundColor = "#cbfc71";
    boton.style.color = "red";

    // Actualiza los puntos según si se encontró la letra
    if (lletraTrobada) {
        encertsConsecutius++; // Incrementa los aciertos consecutivos
        let puntsIndividuals = encertsConsecutius * comptadorLletra; // Calcula los puntos por aciertos
        puntsSumats += puntsIndividuals;
    
    } else {
        encertsConsecutius = 0;
        puntsSumats = Math.max(0, puntsSumats - 1);
        jugadesRestants--; // Reducir jugadas restantes si la letra no está en la palabra
        penjat.src = `img/penjat_${10 - jugadesRestants}.jpg`; // Actualizar imagen
    }

    resultat = resultatArray.join(" "); // Une el array en un string
    linias.textContent = resultat; // Muestra el resultado en el elemento
    punts.textContent = puntsSumats; // Actualiza los puntos mostrados

    GanarPerder(); // Verifica si el juego ha ganado o perdido
}

// Reinicia el juego y vuelve a dejarlo como estaba antes de empezar el juego menos los datos que son acumulativos
function resetearJoc() {
    botoContraseña.disabled = false;
    comencar.disabled = false;
    paraulaSecreta.disabled = false;
    linias.textContent = "Començar partida";
    paraulaSecreta.value = "";
    document.getElementById("linias").style.backgroundColor = "#ffffff";
    jocIniciat = false;
    jocAcabat = false;
    puntsSumats = 0;
    punts.textContent = puntsSumats;
    encertsConsecutius = 0;
    jugadesRestants = 10;
    penjat.src = `img/penjat_0.jpg`;
    botons.forEach((boton) =>{
        boton.disabled = true;
        boton.style.border = "1px solid red";
        boton.style.borderRadius = "4px";
        boton.style.backgroundColor = "#cbfc71";
        boton.style.color = "red";
    });
    document.getElementById("linias").style.backgroundColor = "#c2d4f9";

}

// Verifica si el jugador ha ganado o perdido
function GanarPerder() {
    const paraulaSecretaVal = paraulaSecreta.value.toUpperCase();
    const liniasVal = linias.textContent.replaceAll(" ", "");
    
    // Verifica si se ha ganado
    if (liniasVal === paraulaSecretaVal) {
        document.getElementById("linias").style.backgroundColor = "#dcfaa6";
        jocAcabat = true;
        totalPartides++;
        partidesGuanyades++;
        
        // Actualiza la partida con más puntos si hace falta
        if (puntsSumats > maxPunts) {
            maxPunts = puntsSumats;
            partidaMesPunts.textContent = maxPunts;
        }

        // Actualiza el máximo de puntos total si hace falta
        if (puntsSumats > maxPuntsTotal) {
            maxPuntsTotal = puntsSumats;    
            let data = new Date().toLocaleDateString("es-ES"); // Obtiene la fecha actual
            let hora = new Date().toLocaleTimeString("es-ES"); // Obtiene la hora actual
            document.getElementById("partidaMesPunts").textContent = data + " " + hora + " - " + maxPuntsTotal + " punts";
        }
        // Desactiva todos los botones
        botons.forEach((boton) =>{
            boton.disabled = true;
        });
        comencar.disabled = false;
        botoContraseña.disabled = false;
    } else if (jugadesRestants === 0) { // Verifica si se han acabado las jugadas
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
        percentatge = ((partidesGuanyades / totalPartides) * 100); // Calcula el porcentaje de victorias
    }
    document.getElementById("percentatgeGuanyades").textContent = `(${percentatge.toFixed(2)}%)`;

    // Actualiza el total de partidas y las ganadas en la interfaz
    document.getElementById("totalPartides").textContent = totalPartides;
    document.getElementById("partidesGuanyades").textContent = partidesGuanyades;

    // Activa de nuevo el botón de mostrar contraseña y el campo de la palabra secreta
    botoContraseña.disabled = false;
    paraulaSecreta.disabled = false;
}
