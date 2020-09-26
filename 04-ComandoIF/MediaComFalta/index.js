//Biblioteca responsável por ler a entrada de dados pelo o usuário
//Programa que calcula a média e faltas
var readlineSync = require('readline-sync');

// Variáveis de entrada
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var nome = "";
var totalAulas = 0;
var totalFaltas = 0;

// Variáveis para armazenamento dos cálculos
var media = 0;
var percentualFaltas = 0;

console.log("Programa que calcula a média de um aluno")
// Entrada do nome
nome = readlineSync.question("Digite o seu nome: ");

// Entrada das notas
n1 = parseFloat(readlineSync.question("Valor da primeira nota: "))
n2 = parseFloat(readlineSync.question("Valor da segunda nota: "))
n3 = parseFloat(readlineSync.question("Valor da terceira nota: "))
n4 = parseFloat(readlineSync.question("Valor da quarta nota: "))

//Entrada da quantidade de aulas e quantidade de faltas 
totalAulas = parseInt(readlineSync.question("Digite o total de aulas: "));
totalFaltas = parseInt(readlineSync.question("Digite o total de faltas: "));

// Calculo da média
media = (n1 + n2 + n3 + n4) / 4;
console.log(nome + " sua média é: " + media);

// Cálculo de faltas  total de faltas * 100 / total de aulas
percentualFaltas = totalFaltas * 100 / totalAulas;
console.log(nome + " seu percentual de faltas  é: " + percentualFaltas + "%");

// Condição para aprovação e reprovação utilizando if and &&
if ((media >= 7) && (percentualFaltas <= 25)){
    console.log("Parabéns você foi aprovado !!! ");
} else {
    console.log("Que pena, você não foi aprovado !!!");
}


