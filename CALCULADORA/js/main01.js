function soma() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let result = parseInt(n1) + parseInt(n2);
    alert("O resultado da soma é " + result);
}

function subtracao() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let result = parseInt(n1) - parseInt(n2);
    alert("O resultado da subtração é " + result);
}

function divisao() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let result = parseFloat(n1) / parseFloat(n2);
    alert("O resultado da divisão é " + result);
}

function multiplicacao() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let result = parseFloat(n1) * parseFloat(n2);
    alert("O resultado da multiplicação é " + result);
}