let minuts = parseInt(prompt("Posa els minuts: "));
let segons = parseInt(prompt("Posa els segons"));
let hores = 0;

//calcular las horas y ajustar los minutos
if(minuts >= 60){
    hores+= Math.floor(minuts / 60);
    minuts = minuts % 60;
}
//calcular los minutos y ajustar los segundos
if (segons >= 60){
    minuts+= Math.floor(segons / 60);
    segons = segons % 60;
}
//ajustar los minutos si vuelven a pasar de 60
if (minuts >= 60){
    hores += Math.floor(minuts / 60);
    minuts = minuts % 60;
}
console.log("El temps total de la trucada han sigut: " + hores + "hores, " + minuts + "minuts, " + segons + "segons.");