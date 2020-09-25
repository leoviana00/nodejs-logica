//Programa que calcula a área de um circulo
var readlineSync = require('readline-sync');
var raio = 0;
var area = 0;

console.log("Programa que calcula a área de um circulo");

//Entrada de dados
raio = parseFloat(readlineSync.question("Digite o raio :"));
area = parseFloat(readlineSync.question("Digite o area :"));

/*Operação
Área do círculo = pi*raio² */
area = Math.PI * raio * raio;
console.log("A área do círculo é :" + area);