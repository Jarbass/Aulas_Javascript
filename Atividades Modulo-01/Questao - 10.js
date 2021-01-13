//ESCREVA UMA FUNÇÃO QUE RECEBA DOIS PARÂMETROS.
//O PRIMEIRO PARÂMETRO É O ELEMENTO QUE REPETIRÁ,
//ENQUANTO QUE O SEGUNDO SERÁ O NÚMERO DE VEZES QUE HAVERÁ REPETIÇÃO.
//UM ARRAY SERÁ RETORNADO

function repetir(valor, repeat) {
    let array = [];

    for(let i = 0; i < repeat; i++){
        array.push(valor);
    }

    return array;
}

console.log(repetir("console", 5));
