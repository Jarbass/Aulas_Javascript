const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //Massa quebrou o carro! .pop remove o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); //Adiciona no Array colocando no final
console.log(pilotos);

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); //Adiciona no Array colocando em primeiro
console.log(pilotos);

//splice pode adicionar e remover elementos

//Adicionando
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3,1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Novo Array - Pega um novo pedaço do array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);

