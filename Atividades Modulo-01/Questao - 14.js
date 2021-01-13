function objetoParaArray(objeto) {
    let resultado = [];

    for (let chave in objeto) {
        resultado.push( [chave, objeto[chave] ]);
    }

    return resultado
}

console.log(objetoParaArray({nome: "Maria", profissão: "Desenvolvedor de Software"}));

//TESTANDO FOR...IN
//EXEMPLOS RETIRADOS DO DEVELOPER MOZILLA

var obj = {a:1, b:2, c:3};

for (const valor in obj) {
    console.log(`obj.${valor} = ${obj[valor]}`);
}

