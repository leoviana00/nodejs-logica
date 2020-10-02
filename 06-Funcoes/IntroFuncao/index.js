function numPar (num){
    var retorno = false;
    if (num%2 == 0){
        var retorno = true;
    }
    return retorno;

}
var par = numPar(6);
console.log(par);