const escola = "Cod3r";

console.log(escola.charAt(4));//charAt - Dá a letra na quarta posição da String
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));//charCodeAt - Código relacionado a tabela Unicode

console.log(escola.indexOf('r'));//indexOf - Dá o índice relacionado ao 3 que está dentro das ''

console.log(escola.substring(1));//substring - Inclui do 1 dígito até o final
console.log(escola.substring(1, 5));//substring - Inclui do 0 dígito até o 3

console.log('Escola '.concat(escola).concat('!'));//concat - Serve para concatenação
console.log('Escola '+ escola + '!');//+ - Também serve para concatenação 
console.log(escola.replace(3, 'e'));//replace - Substituição do valor dado antes da vírgula

console.log("Ana, Maria, Pedro".split(','));//split - Gerando um Array depois das vírgulas

