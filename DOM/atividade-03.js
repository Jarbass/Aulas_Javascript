//ATIVIDADE BASEADA NO SITE ANIMAIS FANTÁSTICOS

//Mostre no console cada parágrafo do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
paragrafos.forEach((p) => console.log(p));

//Mostre o texto dos paragrafos no console
paragrafos.forEach((p) => console.log(p.innerText));

//Como corrigir os erros abaixos:

const imgs = document.querySelectorAll("img");

/*imgs.forEach(item, index => {
    console.log(item, index);
});*/

imgs.forEach((item, index) => {
    console.log(item, index);
});

/*let i = 0; 
imgs.forEach ( => {
    console.log(i++);
});*/

let i = 0; 
imgs.forEach (() => console.log(i++));

imgs.forEach(() => i++);

