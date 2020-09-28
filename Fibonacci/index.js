var i;
var fib = []; // Inicializando o array

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {

  // Próximo número de fibonacci = anterior + um antes do anterior
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}