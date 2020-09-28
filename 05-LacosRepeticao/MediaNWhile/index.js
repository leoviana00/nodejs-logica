var readlineSync = require('readline-sync');

//Variáveis
var t1 = 0;
var total = 0;
var valor = 0;
var media = 0;
var i = 0;
var resp = "sim";

//Exibe o que o programa faz
console.log("Programa que calcula a média de n números");
while (resp == "sim") {
//Entrada de dados
    t1 = parseInt(readlineSync.question("Informe a quantidade de números: "));
// Zerando os valores para não dar erro no cálculo seguinte    
    i = 0;
    total = 0;
// Soma os valores informados
    while(i < t1){
        valor = parseFloat(readlineSync.question("Informe o número " + (i + 1) + ": "));
        total = total + valor;
        i++;
        //i = i + 1
    }
    media = total/t1
    console.log("A média é: " + media);
    console.log("Digite sim para continuar ou qualquer outra tecla para sair");
    resp = readlineSync.question("Informe sua resposta: ");
    // Para receber o sim tanto minúsculo quanto maiúsculo
    resp = resp.toLowerCase();
}
