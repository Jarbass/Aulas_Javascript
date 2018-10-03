let isAtivo = false;

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// "!" = Não / "!!" = Não Não
isAtivo = 1 
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!!'Teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// "||" = ou 
console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))

//Exemplos de "|| = ou"
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')


