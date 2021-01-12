//ESCREVA UMA FUNÇÃO QUE RECEBA A IDADE DE UMA PESSOAS EM ANOS
//E RETORNE A MESMA IDADE EM DIAS.

function converterIdadeEmAnosParaDias(idade) {
    const ano = 365;
    result = idade * ano;

    return `Sua idade em dias é ${result}`;
}

console.log(converterIdadeEmAnosParaDias(22));