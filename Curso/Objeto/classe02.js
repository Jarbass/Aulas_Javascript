class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo { //extends = Defini que uma classe tem outra classe como protótipo
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome); //Chamando o sobrenome do Avo com o Super que pega da superclass Avo
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva")
    }
}

const filho = new Filho
console.log(filho);