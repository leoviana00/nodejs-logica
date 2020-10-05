/* 
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
(Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)
*/
//Biblioteca reposável por ler a entrada de dados
const readlineSync = require('readline-sync');
// Variáveis para armazenamento dos dados do usuário
var idade = 0;
var anoNasc = 0;
var mesNasc = 0;
var diaNasc = 0;
// Variáveis para armazenar a data atual
var hoje = new Date();
var diaAtual = hoje.getDate();
var mesAtual= hoje.getMonth();
var anoAtual = hoje.getFullYear();

//Entrada dos dados 
anoNasc = readlineSync.question("Informe o ano que você nasceu: ");
mesNasc = readlineSync.question("Informe o número que representa o mês que você nasceu: ");
diaNasc = readlineSync.question("Informe o dia que você nasceu: ");
//Cálculo
idade = anoAtual - anoNasc;
mes =  mesAtual - mesNasc;
dia =  diaAtual - diaNasc;

dias = (idade * 365); 
//Exibição na tela
console.log(" Você tem: " + idade + " anos " + ", " + mes + " meses" + " e " + dia + " dia(s).");




 
