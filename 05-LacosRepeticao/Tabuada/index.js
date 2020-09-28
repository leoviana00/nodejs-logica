//Biblioteca responsável por ler a entrada de dados do usuário
var readlinseSync = require('readline-sync');
// Exibe o que o programa faz
console.log("Programa que exibe a tabuada de um número utilizando while");
//Entrada de dados
var n = parseInt(readlinseSync.question("Qual o número?: "));
// Informação do número que terá sua tabuáda exibida
console.log("Tabuada do número: " + n);
var i = 0;
while(i <= 10){
    console.log(n + " X " + i + " = " + (n * i));
    // i = i + 1
    i++;
}




