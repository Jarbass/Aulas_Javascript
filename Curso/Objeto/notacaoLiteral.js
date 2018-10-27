const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; //Antes da atualização
const obj2 = {a, b, c}; //Depois da atualização
console.log(obj1, obj2);

//Atribuição de valores depois da atualização
const nomeAttr = "Nota";
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);
//End

//Objeto em function depois da atualização
const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //...
    }
};

console.log(obj5);