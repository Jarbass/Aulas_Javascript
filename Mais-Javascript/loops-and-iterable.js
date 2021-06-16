// Crie 4 li's na página utilizando o for...of e adicione uma classe a cada li
const items = document.querySelectorAll("li");

for(const item of items) {
    item.classList.add("ativo");
}

// Utilize o for...in para listar todas as propriedades e valores do objeto window
for(const windowKey in window) {
    console.log(`${windowKey}: ${window.windowKey}`);
}