//Biblioteca que reaponsável por lê as entradas de dados
var readline = require('readline-sync');

//Variáveis
var n = 0;
var count = 0;
var i = 0;

//Exibe na tela o que o programa faz
console.log("Programa que verifica um número primo");

//Entrada de dados
n = parseInt(readline.question("Informe um número inteiro: "));

//Dividir o número n vezes
for(i = 1; i <= n; i++){
    if(n%i == 0){
        count = count + 1;
    }
}
if (count == 2)
{
    console.log(" O número " + n + " é um número primo");
}
else{
    console.log(" O número " + n + " não é um número primo");
}
    