/*

Criar uma função que receba um array de números e retorne o menor número desse array.

*/

function menorNumero(numeros) {
    let menor = numeros[0];

    for (let i in numeros) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return menor;
}

console.log(menorNumero([10,5,35,65]));

//REFATORANDO

function menorNumero2(valores) {
    let min = Math.min(...valores);

    return min;
}

console.log(menorNumero2([2,10,20,30]));



