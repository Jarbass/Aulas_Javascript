const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas1 = []
    //i = indice
    for (let i in notas) {
        if(notas[i] < 7) {
            //Para add um elemento no array se usa a função .push
            notasBaixas1.push(notas[i])
        }
    }

console.log(notasBaixas1)

//Com callback
    /*filter = filtrar os elementos do array em cima de 
    algum critério, que passa true or false, sempre verificando se há elementos*/
const notasAltas = notas.filter(function(nota){
    return nota >= 7 
})

console.log(notasAltas)

const notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);