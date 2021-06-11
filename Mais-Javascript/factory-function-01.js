function createButton(text) {
    function element() {
        const buttonElement = document.createElement("button");
        buttonElement.innerText = text;
        return buttonElement;
    }

    return {
        text: text,
        element: element,
    }
}

const btnSend = createButton("Enviar");

//

function Pessoa(nome) { 
    if(!new.target) {   //Verificando se this é uma instância de Pessoa
        return new Pessoa; 
    }
    this.nome = nome
}

const developer = Pessoa("Jardel");