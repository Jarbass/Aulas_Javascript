const calculadora = {
    somar: function soma(num1, num2) {
        return num1 + num2;
    },
    subtracao: function sub(num1, num2) {
        return num1 - num2;
    },
    multiplicacao: function mult(num1, num2) {
        return num1 * num2;
    },
    divisao: function div(num1, num2) {
        return num1 / num2;
    }
}

const somar = calculadora.somar;
const subtracao = calculadora.subtracao;
const multiplicacao = calculadora.multiplicacao;
const divisao = calculadora.divisao;

console.log(somar(5, 2));
console.log(subtracao(10, 2));
console.log(multiplicacao(8, 5));
console.log(divisao(10, 2));