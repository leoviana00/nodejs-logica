// Biblioteca responsável por ler as entradas de dados
var readlineSync = require('readline-sync');

// Variáveis para armazenar as entradas de valores dos dados
var la = 0;
var lb = 0;
var lc = 0;
var texto = "Os valores informados nao representam os lados de um trinagulo";

//Exibe o que o programa faz na tela
console.log("Programa que verifica se o valores passados representam os valores de um triangulo");

//Entrada de dados
la = parseFloat(readlineSync.question("Passe o valor de A: "));
lb = parseFloat(readlineSync.question("Passe o valor de B: "));
lc = parseFloat(readlineSync.question("passe o valor de C: "));

// Verifica se um lado é menor que os outros dois
//Utilizando operador "E"
if(la < (lb + lc) && lb < (la + lc) && lc < (la + lb)){
    var texto = "Os valores informados representam os lados de um trinagulo";  
}

/*
if(la < (lb + lc)){
    if(lb < (la + lc)){
        if(lc < (la + lb)){
            var texto = "Os valores informados representam os lados de um trinagulo";
        }  
    }
}*/
console.log(texto);
