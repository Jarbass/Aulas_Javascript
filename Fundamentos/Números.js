const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//.isInteger verifica se é true or false
console.log(Number.isInteger(peso2));//.isInteger verifica se é true or false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Quantidade de casas decimais possíveis
console.log(media.toString()); //Transformando em string
console.log(typeof media);     //Tipo da const media
console.log(typeof Number);    //Tipo da const Number
