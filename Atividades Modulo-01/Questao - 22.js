/*

Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

*/

function funcaoDaSorte(num) {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const aleatorio = Math.random(array) * 10;
    const numAleatorio = aleatorio.toFixed(0);

    if (num == numAleatorio){
        return `Parabéns! O número sorteado foi o ${numAleatorio}.`;
    } else {
        return `Que pena! O número sorteado foi o ${numAleatorio}.`;
    }
}

console.log(funcaoDaSorte(4));

//SOLUÇÃO SUGERIDA

function funcaoDaSorte2(numero) {
    const min = 1;
    const max = 10;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    return (numero === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena! O número sorteado foi o ${numeroAleatorio}`
    )
}