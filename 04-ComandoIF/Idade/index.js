// Package
var readlineSync = require('readline-sync');

const idade = 18;
var n = 0;

n = parseInt(readlineSync.question("Digite a sua idade: "));

var i = 1;

while(i <= 10){
    if(n<=idade){
        console.log("Você é menor de idade");
    }else{
        console.log("Você é maior de idade")
    }
    i++;
}
   console.log("Fim do programa");