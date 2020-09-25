//Programa para verificar se um número é par ou impar
var readlineSync = require('readline-sync');
var n = 0;
var resto = 0;

console.log("Programa que verifica se um número é par ou impar");
n = parseInt(readlineSync.question("Digite um número inteiro :"));
resto = n%2;

if (resto == 0){
    console.log(n + " é um número par");
}
else {
    console.log(n + " é um número impar");
}



