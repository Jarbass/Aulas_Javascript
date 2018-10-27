const sequencia = {
    _valor: 1, //Convenção - Para acessar somente interno
    get valor() { return this._valor++}, //Get associa uma propriedade de um objeto a uma função que será chamado 
    set valor(valor) { //Set liga propriedade da função para ser chamado quanto existe uma tentativa de definir outro valor.
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
