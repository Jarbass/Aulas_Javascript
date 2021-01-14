/*

Elabore uma função que receba um array de números e 
retorne um array que tenha todos os números que são
pares e que também tenham índices pares.

*/

function receberSomenteOsPares(array) {
    let resultado = [];

    for(let i = 0; i < array.length; i += 2) {
        const numeroPar = array[i] % 2 === 0;

        if (numeroPar) {
            resultado.push(array[i]);
        }

    }

    return resultado;
}

console.log(receberSomenteOsPares([1,3,6,9,12,2,18,20]));