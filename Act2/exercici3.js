let unitat = prompt("Introdueix una 'C' o una 'F':")
//fer que la temperatura sigui en float
let temperatura = parseFloat(prompt("Introdueix una temperatura:"))

if(unitat == 'C'){
    let F = 9/5*temperatura+32; //formula per calcular els graus en ºF
    console.log("Temperatura pasada de 'ºC' a 'ºF': " + F);
} 
if(unitat == 'F'){
    let C = (temperatura-32)*5/9; //formula per calcular els graus en ºC
    console.log("Temperatura pasada de 'ºF' a 'ºC': " + C);
}