//DESENVOLVA UMA FUNÇÃO QUE RECEBA DOIS NÚMEROS
//E REALIZE A MULTIPLICAÇÃO DELES. PORÉM, NÃO UTILIZE O OPERADOR DE MULTIPLICAÇÃO.

function mult(n1, n2) {
    let soma = 0;
    let num = 0;

    while (num < n1) {
        soma = soma + n2;
        num++;
    }

    return soma;
}

console.log(mult(3, 7));