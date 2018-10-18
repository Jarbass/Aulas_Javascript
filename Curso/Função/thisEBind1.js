const pessoa = {
    saudacao: "Bom dia!",
    //ES2015
    falar() {
        console.log(this.saudacao) //Presica usar o "this" para acessar o obj "saudacao"
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: Funcional e OO

//bind = Usado para puxar uma função 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()