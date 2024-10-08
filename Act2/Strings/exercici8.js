let string = prompt("Posa una paraula: ");

//guardar el caràcter 'c' i '@' en dos variables
caracterC = string.includes('c');
caracterA = string.includes('@');

//condició de que el caràcter 'c' i '@' estigui en la paraula
if(caracterC && caracterA) {
    console.log("Conté 'c' i '@'");
} 
//el caràcter 'c' i '@' no estigui en la paraula
else {
    console.log("No conté 'c' ni '@'");
}