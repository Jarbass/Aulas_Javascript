//Factory - Cria um objeto
function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1 
    }
};

console.log(criarProduto("Notebook", 2000.99));
console.log(criarProduto("Celular", 999.99));