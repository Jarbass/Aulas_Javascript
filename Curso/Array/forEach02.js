//Meu jeito feio
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

function forEach2(aprovados) {
    aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
    })
}


//Outro jeito
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
//const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(`${indice + 1}) ${nome}`);
});
