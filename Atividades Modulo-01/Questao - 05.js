//CRIE UMA FUNÇÃO QUE RECEBE DOIS NÚMEROS E
//RETORNE SE O PRIMEIRO É MAIOR OU IGUAL AO SEGUNDO
//(UTILIZANDO TIPOS BOOLEANOS)

function maiorOuIgual(num1, num2) {
    if ( num1 != num2) {
        return false;
    } else {
        return num1 >= num2;
    }
}

console.log(maiorOuIgual(1,2));