//Programa para verificar se um número é par ou impar
// readline-sync - Biblioteca para leitura da entrada de dados
var readlineSync = require('readline-sync');

//Variáveis de entrada
var n = 0;

// Variável para armazenar o resto
var resto = 0;

// Exibe o que o programa faz 
console.log("Programa que verifica se um número é par ou impar");

//Entrada de dados
n = parseInt(readlineSync.question("Digite um número inteiro :"));

// Calculando o resto
resto = n%2;

// Condição para o número ser par ou impar
if (resto == 0){
    console.log(n + " é um número par");
}
else {
    console.log(n + " é um número impar");
}



