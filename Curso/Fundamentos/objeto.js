/*OBS: Um OBJECT é definido pelas "{}colchetes" 
       É um conjunto de Pares=Var e Valor=Atributos*/

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1["descontoLegal"]= 0.40

console.log(prod1)

const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
}

console.log(prod2)
