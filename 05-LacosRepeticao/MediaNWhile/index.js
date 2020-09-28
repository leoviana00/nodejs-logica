var readlineSync = require('readline-sync');

//Variáveis
var t1 = 0;
var total = 0;
var valor = 0;
var media = 0;
var i = 0;

//Exibe o que o programa faz
console.log("Programa que calcula a média de n números");

//Entrada de dados
t1 = parseInt(readlineSync.question("Informe a quantidade de números: "));

while(i < t1){
    valor = parseFloat(readlineSync.question("Informe o número " + (i + 1) + ": "));
    total = total + valor;
    i = i + 1;
}
media = total/t1
console.log(media);