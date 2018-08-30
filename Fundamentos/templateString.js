//Exemplo feio e funcional de String + Var
const name = 'Rebeca';
const concatenacao = 'Olá ' + name + ' !';

//console.log(concatenacao);
//Exemplo termina aqui


//Exemplo bonito e funcional do template
const template = ` Olá ${name}! `

//console.log(template)
//Exemplo termina aqui

//Exemplo bonito e funcional do template com expressões
//console.log(`O valor da soma de 4+7 é igual a ${1+1} !`)

const up = texto =>texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}! `);