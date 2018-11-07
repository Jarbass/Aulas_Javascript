const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plástico", preco: 18.99, fragil: false}
]

//Filter é true or false
const precoCaro = produtos => produtos.preco > 500;
const isFragil = produtos => produtos.fragil;

const resultado = produtos.filter(precoCaro).filter(isFragil);
console.log(resultado);