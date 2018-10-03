//Função = Ação
//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()

// Função com retorno
//Function com retorno pode ser atribuída a uma variável


function soma(a, b = 1) {
    return a+b
}

console.log(soma(2, 3))
console.log(soma(2))