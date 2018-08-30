/* OBS: Um Array é definido pelas "[]"chaves */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])
console.log(valores[4])

//Coloca o índice 4 no array
//valores[4] = 10 
//console.log(valores)

//Outras funcionalidades
valores[10] = 10 
//console.log(valores)

//".legth" Informa quantos valores tem no Array
//console.log(valores.length)

//Não mistura tipos em um Array
//".push" Adiciona algo ao Array
//valores.push({id: 3}, false, null, 'teste')
//console.log(valores)

//".pop" Informa o último valor de um Array
console.log(valores.pop())
//"delete" deleta o valor dentro do índice informado
delete valores[0]
console.log(valores)


console.log(typeof valores)
