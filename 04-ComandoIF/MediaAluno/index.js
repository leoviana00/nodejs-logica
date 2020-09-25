//PROGRAMA QUE CALCULA A MÉDIA DO ALUNO
var readlineSync = require('readline-sync');
var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0;

//Entrada de dados
console.log("Programa que calcuma a média do aluno")
nome = readlineSync.question("Digite o seu nome :");
n1 = parseFloat(readlineSync.question("Informe a 1 nota :"));
n2 = parseFloat(readlineSync.question("Informe a 2 nota :"));
n3 = parseFloat(readlineSync.question("Informe a 3 nota :"));
n4 = parseFloat(readlineSync.question("Informe a 4 nota :"));
// Calculo da media
media = (n1+n2+n3+n4)/4;
console.log("Media: "+ media);
// Condição para ser aprovado 
if(media >= 7){
    console.log(nome + "Parabéns, você foi aprovado");
}
else{
    console.log(nome + " você foi reprovado.\nTente nomente.");
}


