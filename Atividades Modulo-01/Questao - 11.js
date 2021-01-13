function primeiroEUltimoElemento(valores) {
    const primeiroElemento = valores.shift();
    const ultimoElemento = valores.pop();

    return `O primeiro elemento é ${primeiroElemento} e o último elemento é ${ultimoElemento}`;
}

console.log(primeiroEUltimoElemento([2,3,4,5]));