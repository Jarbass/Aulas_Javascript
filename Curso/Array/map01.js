const nums = [1, 2, 3, 4, 5];

//Map = For com propósito

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
//toFixed(2) = Coloca duas casas decimais
//replace = Troca o "." pela ","
//parseFloat = Passa um int para um float
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`; 

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);