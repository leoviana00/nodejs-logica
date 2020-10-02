// Gerar password aleatório utilizando Math.random 
function generate_password(length)
{
    //O parâmetro 36 passado para toString, deve ser um inteiro entre 2 e 36 especificando a base utilizada para representar os valores numéricos.
    //substring limita os caracteres
    return Math.random().toString(36).substring(0, length);
}

 // Password com 5 caracteres
console.log(generate_password(5));
 // Password com 6 caracteres
console.log(generate_password(6));
 // Password com 7 caracteres
console.log(generate_password(7));
 // Password com 8 caracteres
console.log(generate_password(8));
 // Password com 9 caracteres
console.log(generate_password(9));
 // Password com 10 caracteres
console.log(generate_password(10));
