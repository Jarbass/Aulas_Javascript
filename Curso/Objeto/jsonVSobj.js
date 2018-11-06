//JSON é um formato textual - Somente para texto
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj)); //Transformando em JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }')); //Todo nome de atributo em JSON tem que ter ""
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));
