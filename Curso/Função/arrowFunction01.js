//Tipo 1 de fuction
let dobro = function(a) {
    return 2 * a
}

//Tipo 2 de function
dobro = (a) => {
    return 2 * a
}

//tipo 3 de function
dobro = a => 2 * a 

console.log(dobro(Math.PI));

let ola = function () {
    return "Olá"
};

ola = () => "Olá";
ola = _ => "Olá";

console.log(ola());