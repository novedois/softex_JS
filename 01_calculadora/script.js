let botao = document.querySelector('.botao');
		let resposta = document.querySelector('.resposta');

		

		botao.addEventListener('click', function(e){
			e.preventDefault();
			
			let num1 = document.querySelector('#num1').value;
			let num2 = document.querySelector('#num2').value;
			let operador = document.querySelector('#operador').value;

			if (operador == '+') {
				resposta.innerHTML = `<strong>Soma: </strong> ${parseFloat(num1) + parseFloat(num2)}`
			} else if (operador == '-') {
				resposta.innerHTML = `<strong>Subtração: </strong> ${parseFloat(num1) - parseFloat(num2)}`
			} else if (operador == '*') {
				resposta.innerHTML = `<strong>Multiplicação: </strong> ${parseFloat(num1) * parseFloat(num2)}`
			} else if (operador == '/') {
				resposta.innerHTML = `
				<strong>Divisão: </strong> ${parseInt(num1 / num2)}<br>
				<strong>Resto: </strong> ${num1 % num2}
				`
			}
			else {
				resposta.innerHTML = `<strong>Erro - Digite um operador válido</strong>`
			}
});