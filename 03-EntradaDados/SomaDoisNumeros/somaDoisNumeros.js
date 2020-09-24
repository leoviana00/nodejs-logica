/*Programa que
soma dois números
Packages readline-sync - www.npmjs.com */
var readlineSync = require('readline-sync');
console.log("Programa para somar dois números");
var n1 = parseFloat(readlineSync.question('Digite o primeiro valor: '));
var n2 = parseFloat(readlineSync.question('Digite o segundo valor: '));
var total = 0;
total = n1 + n2;
console.log (n1 + " + " + n2 + " = " + total);
