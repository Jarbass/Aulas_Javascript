/*

Crie uma função que receba um array de elementos 
e retorne um array somente com os números presentes no
array recebido como parâmetro.

*/


function filtrarNumeros(valores) {
    let numbers = [];
    
    for(let item of valores) {
       if (typeof item === "number") {
           numbers.push(item);
       }
    }

    return numbers;
}

console.log(filtrarNumeros([1,2, "olá", 4]));

//TESTANDO FOR...OF
//EXEMPLOS RETIRADOS DO DEVELOPER MOZILLA

const array1 = ["a", "b", "c"];

for (const element of array1){
    console.log(element);
}

//INTERAGINDO COM ARRAY

const interacao = [10, 20, 30];

for (let valor of interacao){
    valor += 1;
    console.log(valor);
}

//INTERAGINDO COM STRING

const interacao2 = "boo";

for (const valor2 of interacao2) {
    console.log(valor2);
}

//INTERAGINDO COM MAP

const interacao3 = new Map([ ["a", 1], ["b", 2], ["c", 3] ]);

for (const chaveValor of interacao3) {
    console.log(chaveValor);
}

for (const [chave, valor] of interacao3) {
    console.log(valor); 
    //console.log(chave);
}