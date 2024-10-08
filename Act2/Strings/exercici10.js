let string = prompt("Posa una paraula: ");

//guardar la paraula en una variable
paraulaIncluida = string.includes('javascript');

//condició si la paraula està inclosa en la cadena remplaça per JS m'agrada!!
if(paraulaIncluida) {
    console.log(string.replace(/javascript/g,"JS m'agrada!!"));
} 
//si no està inclosa
else {
    console.log(string);
}