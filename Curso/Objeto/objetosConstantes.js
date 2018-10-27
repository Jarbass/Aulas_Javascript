//Mudou apenas o atributo e não o endereço, por isso funciona.
const pessoa = { nome: "João"};
pessoa.nome = "Pedro";
console.log(pessoa);

//pessoa = {nome: "Ana"}

//Congela a const pessoa
Object.freeze(pessoa);

pessoa.nome = "Maria";
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome:"João"});
//pessoaConstante.nome = "Maria";
//Dá erro por causa do Object.freeze
console.log(pessoaConstante);