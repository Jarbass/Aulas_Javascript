//var
console.log ('a= ', a)
//a = 2
//assim que funciona o hoisting
var a = 2
console.log('a =', a)

//Funciona em função
function teste(){
    console.log("b =", b)
    var b = 1
    console.log("b =", b)
}

teste()

//Testando com let
//Não funciona com let
/*console.log("c =", c)
let b = 2
console.log("c =", c)*/