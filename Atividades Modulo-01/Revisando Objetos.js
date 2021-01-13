// REVISANDO CONCEITOS DE OBJETOS JS
var myCar = new Object();

myCar.fabricante = "Ford";
myCar.modelo = "Mustang";
myCar.ano = 1969;

//PODE SER ESCRITO (MÉTODO MAIS USADO)
var meuCarro = {
    fabricante: "Ford",
    modelo: "Mustang GT",
    ano: 1969
};

//TAMBÉM PODE SER ESCRITO
meuCarro["fabricante"] = "Fiat";
meuCarro["modelo"] = "Toro";
meuCarro["ano"] = 2015;

console.log(meuCarro);

//CONSTRUCTOR FUNCTION
function Car(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
}

var novoCarro = new Car ("Fiat", "Strada", 2018);
var vendaCarro = new Car ("Ford", "Palio", 2015);
var vendaCarro2 = new Car ("Fiat", "Toro", 2015);

vendaCarro2.proprietario = "Jardel";
novoCarro.proprietario = "Gabras";

console.log(novoCarro);
console.log(vendaCarro2);

//ENCAPSULAMENTO DE OBJETOS

var Animal = {
    tipoInvertebrado: "Invertebrados",
        mostrarTipoInvertebrado: function() {
            console.log(`Esse animal é do tipo ${this.tipoInvertebrado}`);
        },  
    tipoMamifero: "Mamíferos",
        mostrarTipoMamifero: function() {
            console.log(`Esse animal é do tipo ${this.tipoMamifero}`);
        },
};

var formiga = Object.create(Animal);
formiga.mostrarTipoInvertebrado();

var cachorro = Object.create(Animal);
cachorro.mostrarTipoMamifero();