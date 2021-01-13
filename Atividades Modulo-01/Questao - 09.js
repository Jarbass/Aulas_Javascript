//ELABORE UMA FUNÇÃO QUE RECEBA UM NÚMERO COMO PARÂMETRO
//E RETORNE UMA STRING COM O SÍMBOLO "+" NA QUANTIDADE ESPECIFICADA NO PARÂMETRO

function retornaSimbolo(valor) {
    let simbolo = "";
    let num = 0;

    while (num < valor) {
        simbolo += "+";
        num++
    }
    
    return simbolo;
}

console.log(retornaSimbolo(5));