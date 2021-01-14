/*

Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.

*/

function filtrarPorQuantidadeDigitos(valores, qtdDesejada) {
    let resultado = [];

    for (numero of valores) {
        const qtdDigitos = String(numero).length;

        if(qtdDigitos === qtdDesejada) {
            resultado.push(numero);
        }
    }

    return resultado
}

console.log(filtrarPorQuantidadeDigitos([38, 2, 365, 10, 125, 11], 2));