let string = prompt("Posa una paraula: ");

//guardar l'últim caràcter en una variable
ultimChar = string.charAt(string.length -1);

//condició de si l'últim caràcter es un número
if(!isNaN(ultimChar)) {
    console.log("És un número");
} 
else {
    console.log("És un string");
}