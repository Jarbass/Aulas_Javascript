// Buscar endereço completo através do CEP
const cep = document.querySelector(".cep");
const btnBuscar = document.querySelector(".buscarCEP")
const enderecoCompleto = document.querySelector(".endereco");

btnBuscar.addEventListener("click", buscaCEP);

function buscaCEP() {
    const numeroCEP = cep.value.replace("-", "");
    const cepAPI = fetch(`https://viacep.com.br/ws/${numeroCEP}/json`);

    cepAPI.then(response => response.text())
        .then(endereco => enderecoCompleto.innerText = endereco);
}

// ==================================================
// Utilizando a API https://blockchain.info/ticker
// Retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
    fetch("https://blockchain.info/ticker")
        .then(response => response.json())
        .then(btcJson => {
            btcDisplay.innerText = ("RS" + btcJson.BRL.buy).replace(".", ",");
        })
}

// setInterval(fetchBtc, 500);

fetchBtc();


//===================================================
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris
// toda vez que clicar em próxima
const btnProxima = document.querySelector(".proxima");
const paragrafoPiada = document.querySelector(".piada");

btnProxima.addEventListener("click", puxarPiada);

function puxarPiada() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(r => r.json())
        .then(piada => {
            paragrafoPiada.innerText = piada.value;
        })
}

puxarPiada();