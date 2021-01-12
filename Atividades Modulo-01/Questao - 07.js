function estaEntre(num, min, max, inclusivo = false) {
    if (inclusivo) {
        return num >= min && num <= max;
    }

    return num > min && numero < max;
}

console.log(estaEntre(3, 150, 3));