//DESENVOLVA UMA FUNÇÃO QUE RECEBE DOIS PARÂMETROS, UM É A QUANTIDADE DE HORAS TRABALHADAS
//POR UM FUNCIONÁRIO NUM MÊS, E O QUANTO ELE RECEBE POR HORA.
//O RETORNO DA FUNÇÃO DEVE SER A STRING "SALÁRIO IGUAL A R$ X",
//EM QUE X É O QUANTO O FUNCIONÁRIO GANHOU NO MÊS.

function calcularSalario(qtdHorasTrabalhadas, salarioPorHora) {
    salario = qtdHorasTrabalhadas * salarioPorHora;
    return `Salário igual a R$ ${salario}`;
}

console.log(calcularSalario(8, 20));