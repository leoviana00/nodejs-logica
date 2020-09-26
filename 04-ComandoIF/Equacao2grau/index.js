//Criar um algoritmo que calcule uma equação do 2º grau.
// Utilizando a readline-sync , biblioteca responsável por ler a entrada de dados
var readlineSync = require('readline-sync');

console.log("Programa que resolve uma equação do segundo grau ");

// Variáveis para receber a entrada de dados
var valorA = 0;
var valorB = 0;
var valorC = 0;

// Variáveis para receber o coeficiente
var coeficiente1;
var coeficiente2;

// Variável para armazenar o valor de delta
var delta = 0 ;

//Entrada dos dados
valorA = readlineSync.question('Digite o valor de A: ');
valorB = readlineSync.question('Digite o valor de B: ');;
valorC = readlineSync.question('Digite o valor de C: ');

//Calculando valor de delta - Fórmula matemática é b² - 4 * a * c
delta = (valorB * valorB) - 4 * valorA * valorC;

//Visualizar o valor de delta
console.log("Valor de Delta => " + delta);

//Condição para que delta tenha raizes reias ou não
if(delta < 0){
    console.log("Para delta negativo, não existem raízes reais");  
  } else{
    
    console.log("Para delta positivo, raízes diferentes:");  
    //Fórmula de Bháskara, (-b ± √Δ) / 2 * a
    coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA); 
    console.log("x' = " + coeficiente1);
    console.log("x'' = " + coeficiente2);
  }
