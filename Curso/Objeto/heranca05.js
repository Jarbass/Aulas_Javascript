console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split("")/*split gera um array*/
                .reverse()/*Inversão dos valores no array*/ 
                .join("")/*Junta e faz uma nova String*/
}

console.log("Escola Cod3r". reverse());

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first());
console.log(["a", "b", "c"].first());

/*NÃO FAÇA ISSO*/
String.prototype.toString = function () {
    return "Lascou Tudo"
}

console.log("Escola Cod3r".reverse());
