//Criar um algoritmo que calcule uma equação do 2º grau.
var readlineSync = require('readline-sync');
console.log("Programa que resolve uma equação do segundo grau ");
var valorA = readlineSync.question('Digite o valor de A: ');
var valorB = readlineSync.question('Digite o valor de B: ');;
var valorC = readlineSync.question('Digite o valor de C: ');
var coeficiente1;
var coeficiente2;

//Fórmula matemática é b² - 4 * a * c
var delta = (valorB * valorB) - 4 * valorA * valorC;

//Visualizar o valor de delta
console.log("Valor de Delta => " + delta);

//Validando valor de delta
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