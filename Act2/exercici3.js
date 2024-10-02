let unitat = prompt("Introdueix una 'ºC' o una 'ºF':")
let temperatura = parseFloat(prompt("Introdueix una temperatura:"))

if(unitat == 'C'){
    let F = 9/5*temperatura+32;
    console.log("Temperatura pasada de 'ºC' a 'ºF': " + F);
} 
if(unitat == 'F'){
    let C = (temperatura-32)*5/9;
    console.log("Temperatura pasada de 'ºF' a 'ºC': " + C);
}