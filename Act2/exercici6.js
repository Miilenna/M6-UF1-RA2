let num = prompt("Posa un número de 5 dígits: ")

//bucle si la longitud és diferent a 5
while(num.length !== 5) {
    num = prompt("Posa un número de 5 dígits: ")
}
//si la longitud és 5
if(num.length === 5) {
    //si el primer i últim número son iguals
    if(num[0] === num[num.length -1]){
        console.log("Comença i acaba amb el mateix valor");
    }
    //si no són iguals
    else {
        console.log("Comença i acaba amb un valor diferent");
    }
}