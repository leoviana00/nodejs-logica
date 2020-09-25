//Programa que calcula a área de um trinângulo
var readlineSync = require('readline-sync');
var base = 0;
var altura = 0;
var area = 0;
console.log("Calcula a área de um triângulo");
// Calculo de area do tringulo = bases * altura / 2
base = parseFloat(readlineSync.question("Informe a base :"));
altura = parseFloat(readlineSync.question("Informe a altura :"));
area = (base * altura) / 2;
console.log("A área do trinângulo é :" + area);

