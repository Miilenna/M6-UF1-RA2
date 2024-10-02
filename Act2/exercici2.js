let valor = prompt("Introdueix un valor:");

let numeroEnter = parseFloat(valor);

if (Number.isInteger(numeroEnter)){
    console.log("El valor és un enter");
} else {
    console.log("El valor és un decimal");
}