const rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 23 },
    { country: "China", launches: 16 },
    { country: "Europe", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 3 }
]

const totalLaunches = rockets.reduce((acumulador, elem) => acumulador + elem.launches, 0)

const fruits = [
    { fruit: "Abacate", value: "R$ 5,00" },
    { fruit: "Maça", value: "R$ 2,00" },
    { fruit: "Melão", value: "R$ 3,00" },
    { fruit: "Melancia", value: "R$ 5,00" },
    { fruit: "Uva", value: "R$ 1,50" },
    { fruit: "Banana", value: "R$ 2,00" }
]

//foreach
function precoTotal2() {
    let total = 0;

    const arrayFrutas = fruits.forEach((item) => {
        const preco = Number(item.value.replace("R$ ", "").replace(",", "."));
        total += preco;
    })

    console.log(total)
}

precoTotal2();


//reduce
const precoTotal = fruits.reduce((acumulador, item) => {
    const preco = Number(item.value.replace("R$ ", "").replace(",", "."));
    return acumulador + preco;
}, 0)

console.log(precoTotal)