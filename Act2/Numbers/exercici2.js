let valor = prompt("Introdueix un valor:");

let numeroEnter = parseFloat(valor);

//per saber si es un enter
if (Number.isInteger(numeroEnter)){
    console.log("El valor és un enter");
} else {
//per saber si es un decimal
    console.log("El valor és un decimal");
}