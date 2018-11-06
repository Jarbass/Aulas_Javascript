let aprovados = new Array ("Bia", "Carlos", "Ana")
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"]; //Jeito certo de usar um array
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = "Paulo";
aprovados.push("Abia"); //Melhor forma de add alguem no array
console.log(aprovados.length) //Verifica o tamanho do array

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); //Altera um array
console.log(aprovados);

delete aprovados[1]; //Não reordena o array
console.log(aprovados[1]);

aprovados=["Bia", "Carlos", "Ana"]
aprovados.splice(1,1); //Serve para adicionar e remover tanto ao mesmo tempo ou não
console.log(aprovados);