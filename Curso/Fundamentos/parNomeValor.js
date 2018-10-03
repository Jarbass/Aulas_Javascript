//par Nome/Valor

const saudacao = "Opa" //Contexto léxico 1

function exec() {
    const saudacao = "Faaala" //Contexto léxico 2
    return saudacao
}

//Objeto são gurpos aninhados de pares nome/valor
const cliente = {
    nome : "Pedro", 
    idade:32,
    peso:90,
    endereço:{
        logradoura:"Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)