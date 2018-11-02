const pessoaa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoaa));
console.log(Object.values(pessoaa));
console.log(Object.entries(pessoaa));

Object.entries(pessoaa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoaa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2019"
});

pessoaa.dataNascimento = "01/01/2017";
console.log(pessoaa.dataNascimento);
console.log(Object.keys(pessoaa));

//Object.assign (ES6)
const dest = { a: 1};
const o1 = { b: 2};
const o2 = { c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

console.log(obj);