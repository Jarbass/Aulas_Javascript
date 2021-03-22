// UTILIZANDO PROTOTYPE EXPLICITO
// function Button(text, background) {
//     this.text = text;
//     this.background = background;
// }

// Button.prototype.element = () => {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// }

// UTILIZANDO CLASS
class Button {
    constructor(text, background, color, border) {
        this.text = text;
        this.background = background;
        this.color = color;
        this.border = border;
    }
    element() {
        const buttonElement = document.createElement("button");

        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        buttonElement.style.border = this.border;

        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);

        targetElement.appendChild(this.element());

        return targetElement;
    }
    static blueButton(text) {
        return new Button(text, "blue", "white");
    }
}

const botaoAzul = Button.blueButton("Comprar");

blueButton.appendTo("body");

// PASSANDO OBJETO COMO PARAMETRO PARA CONSTRUCTOR
// UTILIZANDO O MÉTODO STATIC
// class Button {
//     constructor(options) {
//         this.options = options;
//     }
//     static createButton(text, background) {
//         const buttonElement = document.createElement("button");

//         buttonElement.innerText = text;
//         buttonElement.style.background = background;

//         return buttonElement;
//     }
// }

// const optionsBlue = {
//     backgroundColor: "blue",
//     text: "Comprar",
//     color: "white",
// }

// const blueButton = new Button(optionsBlue);

// const blueButtonStatic = Button.createButton("Clique", "blue");