let string = prompt("Posa una paraula: ");

//guardar el primer caràcter en una variable
primerChar = string.charAt(0);

//condició perquè la primera lletra sigui en majúscules i la resta en mínuscules
if(primerChar.toLowerCase()) {
    console.log(primerChar.toUpperCase() + string.slice(1).toLowerCase());
} 
//si ja està en majúscules que mostri la paraula
else {
    console.log(string);
}