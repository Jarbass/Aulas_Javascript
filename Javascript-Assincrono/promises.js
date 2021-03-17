// const promesa = new Promise((resolve, reject) => {
//     let condicao = true;
//     if (condicao) {
//         setTimeout(() => {
//             resolve({ nome: "Jardel" });
//         }, 1000);
//     } else {
//         reject(Error("Ocorreu um erro"));
//     }
// });

// const retorno = promesa.then(resolucao => {
//     resolucao.profissao = "Designer";
//     return resolucao;
// })

//     .then(resolucao => console.log(resolucao))
//     .catch(refeitada => console.log(refeitada))
//     .finally(() => console.log("Acabou"))

// Passando o CATCH dentro do THEN
// .then(resolucao => {
//     console.log(resolucao);
// }, rejeitada => {
//     console.log(rejeitada);
// })

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Usuário logado");
    }, 1000);
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Dados Carregados");
    }, 1500);
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})