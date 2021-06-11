//Remove o erro
const priceNumber = n => Number(n.replace("R$", "").replace(",", "."));
console.log(priceNumber("R$ 99,00"));

//Crie uma IIFE e isole o escopo de qualquer código JS
(
    function() {
        let nome = "Jardel";
        console.log(nome);
    }
)();

//Como podemos utilizar a função abaixo
const active = callback => callback();

active(() => {
    console.log("Esse é o callback");
})