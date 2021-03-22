class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log("Acelerou");
    }
}

//Utilizando o super
class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
    empinar() {
        console.log("Moto empinou");
    }
    acelerar() {
        super.acelerar();
        console.log("Acelerou muito!");
    }
}

const honda = new Moto(2, "Gasolina", true);
const civic = new Veiculo(4);

console.log(honda)
