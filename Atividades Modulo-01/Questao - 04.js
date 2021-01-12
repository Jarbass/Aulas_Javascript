//CRIE UMA FUNÇÃO QUE RECEBA UM NÚMERO (DE 1 A 12) E RETORNE
//O MÊS CORRESPONDENTE COMO UMA STRING. 

/*function nomeDoMes(numeroDoMes) {
    if (numeroDoMes == 1) {
        nomeDoMes = "Janeiro";
    } else if (numeroDoMes == 2) {
        nomeDoMes = "Fevereiro";
    } else if (numeroDoMes == 3) {
        nomeDoMes = "Março";
    } else if (numeroDoMes == 4) {
        nomeDoMes = "Abril";
    } else if (numeroDoMes == 5) {
        nomeDoMes = "Maio";
    } else if (numeroDoMes == 6) {
        nomeDoMes = "Junho";
    } else if (numeroDoMes == 7) {
        nomeDoMes = "Julho";
    } else if (numeroDoMes == 8) {
        nomeDoMes = "Agosto";
    } else if (numeroDoMes == 9) {
        nomeDoMes = "Setembro";
    } else if (numeroDoMes == 10) {
        nomeDoMes = "Outubro";
    } else if (numeroDoMes == 11) {
        nomeDoMes = "Novembro";
    } else if (numeroDoMes == 12) {
        nomeDoMes = "Dezembro";
    } else {
        return `Digite um número que corresponde aos meses de 1 a 12!`
    }

    return `O mês de número ${numeroDoMes} é ${nomeDoMes}`;
}

console.log(nomeDoMes(10));*/

//REFATORANDO O CÓDIGO

function nomeDoMes(numeroDoMes) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" 
    ]

    return `O mês de número ${numeroDoMes} é ${meses[--numeroDoMes]}.`
}

console.log(nomeDoMes(12));

