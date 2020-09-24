/*Programa que
soma dois números*/
var readlineSync = require('readline-sync');
var n1 = parseFloat(readlineSync.question('Digite o primeiro valor: '));;
var n2 = parseFloat(readlineSync.question('Digite o segundo valor: '));;
var n3 = parseFloat(readlineSync.question('Digite o terceiro valor: '));;
var n4 = parseFloat(readlineSync.question('Digite o quarto valor: '));;
var n5 = parseFloat(readlineSync.question('Digite o quinto valor: '));;
var media = 0;
var total = 0;
console.log("Programa para calcular a média de 5 números");
total = n1 + n2 + n3 + n4 + n5;
//media = (n1 + n2 + n3 + n4 + n5)/5;
media = total / 5;
console.log ("Valor 1: " + n1);
console.log ("Valor 2: " + n2);
console.log ("Valor 3: " + n3);
console.log ("Valor 4: " + n4);
console.log ("Valor 5: " + n5);
console.log ("Total: " + total);
console.log ("Media :" + media);
