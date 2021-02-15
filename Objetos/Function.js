// Retorne a soma total de caracteres dos
// parágrafos no html utilizando reduce

const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)



// Cria uma função que retorne novos elementos htmls,
// com os seguintes parâmetros: tag, classe e conteúdo.

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);

    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    
    return elemento;
}



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a classe titulo. 
// Porém o parâmetro conteúdo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");

const cursosJS = h1Titulo("Cursos de Javascript");
const cursosHTML = h1Titulo("Cursos de HTML");

console.log(cursosJS, cursosHTML);


