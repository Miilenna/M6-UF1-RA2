let string = prompt("Posa una cadena: ");

//guardar el espai buit en una variable
paraulaIncluida = string.includes(" ");

//condició si hi ha espais buits remplaça per una ,
if(paraulaIncluida) {
    console.log(string.replace(/ /g,","));
} 
//si no hi ha espais buits
else {
    console.log(string);
}