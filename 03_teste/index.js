/*
Escolha algum código executável em JavaScript feito em atividades 
passadas e o coloque no Node.js. Para isso, você deve ter o Node.js 
instalado. Após fazer essa migração, coloque seu código no arquivo 
"index.js", teste e tire um print.
*/

const calcula = (operador, n1, n2) => {
	if (operador == '+') {
		console.log(parseFloat(n1) + parseFloat(n2));
	}
	else if (operador == '-') {
		console.log(n1 - n2);
	}
	else if (operador == '*') {
		console.log(n1 * n2);
	}
	else if (operador == '/') {
		console.log(n1 / n2)
	}
	else {
		console.log('Operador inválido!');
	}
}

console.log();

calcula('+', 3, 2);
calcula('-', 3, 2);
calcula('*', 3, 2);
calcula('/', 3, 2);
calcula('p', 3, 2);

console.log();