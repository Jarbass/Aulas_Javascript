/*

Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.

*/

function calcularMedia(valorProdutos) {
    let soma = 0;
    let media = 0;

    for (let i = 0; i < valorProdutos.length; i++) {
        soma += valorProdutos[i];  
        media = soma / valorProdutos.length;
    }

    return media;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));