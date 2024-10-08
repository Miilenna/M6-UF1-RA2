let arxiu = prompt("Posa el nom d'un arxiu: ");

//variable per detectar l'extensió
let extensio = arxiu.split('.').pop();

//mirar si el arxiu conté un .
if(arxiu.includes('.')){
    console.log("L'extensió del arxiu és: " + extensio);
}
//si no té cap extensió
else {
    console.log("L'arxiu no té cap extensió");
}