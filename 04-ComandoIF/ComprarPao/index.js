// Biblioteca para ler e armazenar entradas de dados do usuário
//Programa que simula compra de pão
var readlineSync = require('readline-sync');

// Variáveis para armazenar o nome das pessoas
var nome1 = "";
var nome2 = "";

// Variáveis para armazenar quanto cada pessoa tem
var grana1 = 0;
var grana2 = 0;

// Variáveis para armazenar o valor e qtd dos pães
var valorlPao = 0;
var qtdPao = 0;

//Variável para calculo do pão
var totalPao = 0;

// Exibir o que o programa faz
console.log("Comprar pão");

//Entrada de dados
// Nome da pessoa 1
nome1 = readlineSync.question("Qual o seu nome?: ");

//Quanto de dinheiro ela tem
grana1 = parseFloat(readlineSync.question(nome1 + " quantos reais você tem?: "));

// Nome da pessoa 2
nome2 = readlineSync.question("Qual o nome do seu amigo?: ");

//Quanto de dinheiro ela tem
grana2 = parseFloat(readlineSync.question(nome2 + " quantos reais você tem?: "));

// Valor do pão
valorlPao = parseFloat(readlineSync.question("Qual o valor do pão:"));

//Quantidade de pães
qtdPao = parseInt(readlineSync.question("Quantos pães: "));

//Calculo do pão
totalPao = valorlPao * qtdPao;

// Condição para que ocorra ou não a compra do pão, um ou outro tem que ter a quantia necessária para que ocorra a compra.
// Observação: não podem somar seus dinheiros
if((grana1 >= totalPao) || (grana2 >= totalPao)){
    console.log("Maravilha "+nome1+ " e " +nome2+ " , hoje vai ter pão!!!");
}else{
    console.log("Que pena "+nome1+ " e " +nome2+ " , hoje não terá pão para vocês!!!");
}

