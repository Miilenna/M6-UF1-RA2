let numero = prompt("Introdueix un valor")

if(numero) {
    let esNumero = !isNaN(numero) ? "És un número" : "No és un número";
    console.log(esNumero);
} else {
    console.log("No has introduït cap número");
}

