//ATIVIDADE BASEADA NO SITE ANIMAIS FANTÁSTICOS

//Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

copy.append(cloneMenu);

//Selecione o primeiro DT da DL de FAQ
const faq = document.querySelector(".faq dl");
console.log(faq.firstElementChild);

//Selecione o DD referente ao primeiro DT
console.log(faq.firstElementChild.parentElement);

//Substitua o conteúdo html de .faq pelo de .animais
const conteudoAnimais = document.querySelector(".animais");
const conteudoFaq = document.querySelector(".faq");

conteudoFaq.innerHTML = conteudoAnimais.innerHTML;
