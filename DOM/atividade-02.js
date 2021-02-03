//ATIVIDADE BASEADA NO SITE ANIMAIS FANTÁSTICOS

//Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);

//Retorne no console apenas as imagens que começarem com a palavra imagem

const palavraImagem = document.querySelectorAll("img[src^='img/imagem']");
console.log(palavraImagem);

//Selecione todos os links internos

const todosLinksInternos = document.querySelectorAll("[href^='#']");
console.log(todosLinksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao 

const firstH2 = document.querySelector(".animais-descricao");
console.log(firstH2.querySelector("h2"));

//Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);