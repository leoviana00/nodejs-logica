//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado comparando se os valores são maiores, menores ou iguais a 100.
var readlineSync = require('readline-sync');
console.log("Programa que exibe o valor maior");
var um = parseInt(readlineSync.question("Digite o primeiro valor: ", "Digite aqui!")); 
var dois = parseInt(readlineSync.question("Digite o segundo valor: ","Digite aqui!"));
var soma = um + dois;

 if(soma > 100){
     console.log(soma + " é maior do que 100!");
   }
 else if(soma == 100){
     console.log(soma + " é igual a 100!");
   }
 else{
     console.log(soma + " é menor do que 100!");
   }