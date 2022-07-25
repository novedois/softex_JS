/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
*/

function dizOi() {
	console.log('Oi!');
}

function soma(n1, n2) {
	return parseFloat(n1) + parseFloat(n2);
}

const subtracao = (n1, n2) => n1 - n2;

console.log();

dizOi();
console.log(`Soma: ${soma(5, 3)}`);
console.log(`Subtração: ${subtracao(5, 3)}`);

console.log();