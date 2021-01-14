/*

Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.

*/

function despesasTotais(itens) {
    let total = 0;

    for (let item of itens) {
        total += item.preco;
    }

    return total;
}

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entreterimento", preco: 150}
]));

//IMPLEMENTANDO COM CONSTRUCTOR

function Produto(nome, categoria, preco) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
}

let celular = new Produto("Motorola", "Aparelho Eletrônico", 1200);
let notebook = new Produto("Dell", "Computadores", 2000);
let ps5 = new Produto("Playstation 5", "Video Game", 4500);

function despesasDosProdutos() {
    let despesas = celular.preco + notebook.preco + ps5.preco;
    return despesas;
}

console.log(despesasDosProdutos());