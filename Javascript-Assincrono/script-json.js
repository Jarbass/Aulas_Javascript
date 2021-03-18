// fetch("./dados.json")
//     .then(r => r.json())
//     .then(json => {
//         json.forEach(materia => {
//             console.log(materia.aula);
//         });
//     })

// Entendendo o JSON.parse
fetch("./dados.json")
    .then(r => r.text())
    .then(jsonText => {
        const jsonFinal = JSON.parse(jsonText);
        console.log(jsonFinal);
    })

//Entendendo JSON.stringify    
const configuracoes = {
    player: "google",
    tempo: 25.5,
    aula: "2.1 Javascript",
}

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));