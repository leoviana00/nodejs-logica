//Programa que lê 2 números, soma e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
// Biblioteca responsável por ler as entradas de dados - readline-sync
var readlineSync = require('readline-sync');

// O que o programa faz
console.log("Programa que exibe o valor maior");

// Variáveis para armazenamento das entradas de dados
var um = 0;
var dois 0;

// Variáveis para armazenamento do cálculo
var soma = 0;

// Entrada dos dados 
um = parseInt(readlineSync.question("Digite o primeiro valor: ")); 
dois = parseInt(readlineSync.question("Digite o segundo valor: "));

// Cálculo
soma = um + dois;

// Condição para que o número seja maior, menor ou igual a 100
 if(soma > 100){
     console.log(soma + " é maior do que 100!");
   }
 else if(soma == 100){
     console.log(soma + " é igual a 100!");
   }
 else{
     console.log(soma + " é menor do que 100!");
   }
