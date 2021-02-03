//ATIVIDADE BASEADA NO SITE ANIMAIS FANTÁSTICOS

//Quando o usuário clicar nos links internos do site,
//adicione a classe ativo ao item clicado e remova dos
//demais itens caso eles possuam a mesma. Previsa o comportamento padrão desses links.

const links = document.querySelectorAll("a");

function clickNoLink(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle("Ativo");
}

links.forEach((link) => {
    link.addEventListener("click", clickNoLink);
});

//Selecione todos os elementos do site, começando a partir do body,
//Ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
    console.log(event.currentTarget);
    //event.currentTarget.remove(); RESPOSTA DA QUESTÃO ABAIXO
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener("click", handleElemento);
});

//Utilizando o código anterior, ao invés de mostrar no console,
//remova o elemento que está sendo clicado.


//Se o usuário clicar na tecla (t), aumente todo o texto do site

function handleClickT(event) {
    console.log(event.key);
    
    if (event.key === "t") {
        document.documentElement.classList.toggle("textoMaior");
    }
}

window.addEventListener("keydown", handleClickT);