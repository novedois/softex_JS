/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, 
saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e 
número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.
*/

const Banco = {
	conta: 123,
	saldo: 1000,
	tipoConta: "tipo A",
	agencia: 123,
	
	buscarSaldo: function() {
		console.log(`Saldo atual: ${this.saldo}`);
	},
	
	deposito: function(valor) {
		this.saldo += valor;
		console.log(`Depósito efetivado. Saldo atual: ${this.saldo}`);
	},
	
	saque: function(valor) {
		if (valor <= this.saldo) {
			this.saldo -= valor;
			console.log(`Saque efetivado. Saldo atual: ${this.saldo}`);
		}
		console.log(`Saldo insuficiente`);
	},
	
	conta: function() {
		console.log(`Número da conta: ${this.agencia}`);
	}
}

Banco.buscarSaldo()
Banco.deposito(100);
Banco.saque(1000000);
Banco.conta();