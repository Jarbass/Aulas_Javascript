//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade} = pessoa //tire o nome, idade do objeto pessoa
console.log(nome, idade)

const { nome : n, idade: i } = pessoa //Atribuindo n = nome , i = idade
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //Setando true = bemHumorada
console.log(sobrenome, bemHumorada)

const { endereço : {logradouro, numero, cep} } = pessoa //Acessando de outro obj.
console.log(logradouro, numero, cep)

/*const { conta: {ag, num} } = pessoa //Nunca tentar acessar um valor que não está no obj
console.log(ag, num)*/
