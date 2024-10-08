let numero = prompt("Introdueix un valor")

if(numero) {
    //saber si es un número o no ho és
    let esNumero = !isNaN(numero) ? "És un número" : "No és un número"; 
    console.log(esNumero);
} else {
    console.log("No has introduït cap número");
}

