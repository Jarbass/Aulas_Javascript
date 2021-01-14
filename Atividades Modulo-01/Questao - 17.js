/*

Escreva uma função que receba um array de números e 
retornará a soma de todos os números desse array

*/

function somarNumeros(array) {
    let soma = 0;

    for(let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}

console.log(somarNumeros([10,10,10]));