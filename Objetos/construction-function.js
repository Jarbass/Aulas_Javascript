//Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
    nome: "Nome Pessoa",
    idade: 0,
    andar() {
        console.log(this.nome + " andou");
    }
}

//CONSTRUCTION FUNCTION

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(`${this.nome} andou!`);
    }
}

const pessoaFisica = new Pessoa("Jardel", 22);
pessoaFisica.andar();

//Crie 3 pessoas: João - 20 anos, Maria - 25 anos, Bruno 15 anos.

const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

// Cria uma Construction Function(DOM) para manipulação de listas de elementos do DOM.
// Deve conter as seguintes propriedades e métodos:

// elements -> Retorna NodeList com os elementos selecionados.
// addClass -> Adiciona a classe a todos os elementos.
// removeClass -> Remove a classe de todos os elementos.


function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    
    this.elements = elementList;
    
    this.adiciona = function(classe) {
        this.elements.forEach((item) => {
            item.classList.add(classe);
        })
    }

    this.remove = function(classe) {
        this.elements.forEach((item) => {
            item.classList.remove(classe);
        })
    } 
}

const classe = new Dom("li");
const ul = new Dom("ul");
classe.adiciona("item");
ul.adiciona("container");
