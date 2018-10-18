const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/*A declaração for each...in repete uma variável específica sobre todos os valores
das propriedades do objeto*/
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/*Quando ele encontra um novo elemento ele dispara a function/.
Pra cada elemento o for each volta e passa o elemento e o índice*/