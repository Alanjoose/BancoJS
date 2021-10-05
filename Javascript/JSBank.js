/*
Código fonte da aplicação JS Bank;
Construído inteiramente em javascript;
Utilização da biblioteca (prompt-sync);
!As variáveis são zeradas após fechar o programa!;
Desenvolvedor: AlanJS ;) ;
**Código livre**
*/

const prompt = require('prompt-sync')();
//Aplicação da biblioteca prompt-sync;

class contaBank {
	constructor(Agencia, Conta, Digito, Nome, Datanacimento, Senha, Saldo) {
		this.Agencia = Agencia;
		this.Conta = Conta;
		this.Digito = Digito;
		this.Nome = Nome;
		this.Datanacimento = Datanacimento;
		this.Senha = Senha;
		this.Saldo = Saldo;
	}
}
//Criação da classe banco;

var contA = new contaBank();
contA.Agencia = 0;
contA.Conta = 0;
contA.Digito = [0];
contA.Nome = 0;
contA.Datanacimento = 0;
contA.Senha = 0;
contA.Saldo = 0;
//Instanciamento de uma conta no banco;

var dicaSenha = "0";
var digito = [1,2,3,4,5,6,7,8,9];
var dataant = [31121900];
var datalimit = [31122021];
//Variaveis globais;

function imprimirMenu(){
	console.log('\n~~~~~~~~JS Bank~~~~~~~~\n');
	console.log('(1) Cadastro de Usuario.');
	console.log('(2) Busca de Usuario.');
	console.log('(3) Deposito');
	console.log('(4) Saque');
	console.log('(5) Checar Saldo');
	console.log('(6) User.');
	console.log('(7) Alterar Dados.');
	console.log('(8) Esqueci meus Dados.')
	console.log('(9) Alterar dica de Senha.');
	console.log('(10) Sobre.');
	console.log('\n(0) Sair.\n');
	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
//Imprime o menu principal;


function cadastrarUser(){//cadastro
	contA.Agencia = Number(prompt("Agencia :"));
	contA.Conta = Number(prompt("Conta :"));
	contA.Digito = Number(prompt("Digito da conta :"));
	if (contA.Digito <= digito.length){//length
		digito = digito + contA.Digito;
	}//length
	else {//else length
		console.log("O digito deve ser composto por 1 caractere, nada foi inserido.");
	}//else length
	contA.Nome = prompt("Nome :");
	contA.Datanacimento = Number(prompt("Data de nascimento(numeros juntos sem barra DDMMAA) :"));
	contA.Senha = Number(prompt("Senha :"));
	dicaSenha = (prompt("Dica de senha :"));
	console.log("Usuario cadastrado com Sucesso!")
}//Cadastra o Usuario(Pode ser acessada novamente durante a execução do programa);
//Provavel futura implemetação de verificação da validade da data de nacimento...;

function alterarDados(){
	let bCo = Number(prompt("Conta :"));
	let bSe = Number(prompt("Senha :"));

	if (bCo === contA.Conta && bSe === contA.Senha) {
		function menu() {
		console.log('(1) Alterar Nome :')
		console.log('(2) Alterar Senha :')
		console.log('(3) Sair')
	}

		function altNome(){
			contA.Nome = prompt("Novo Nome :")
		}
		function altSenha() {
			contA.Senha = Number(prompt("Nova Senha :"))
		}
		var opcao = -1
		do {
			menu()
			opcao = Number(prompt("Digite uma opcao :"))
			switch (opcao) {
				case 1:
				altNome()
				break

				case 2:
				altSenha()
				break
			}

		}
		while (opcao != 3)

	}
}
//Altera os dados do usuario(Caso válida a verificação de senha);

function userSearch(){
	let bAg = Number(prompt("Agencia :"));
	let bCo = Number(prompt("Conta :"));
	if (bAg === contA.Agencia && bCo === contA.Conta) {
		console.log(contA.Nome,'Saldo :', contA.Saldo)
	}
	else {
		console.log("Dados incorretos")
	}
}
//Busca de usuário (opção em teste para futuras implementações);

function deposito(){
	let sa = Number(prompt("Quanto deseja depositar ?:"))
	contA.Saldo = contA.Saldo + sa;
	console.log('Adicionada a quantia de :', sa, 'a sua conta.');
}
//Adiciona valor ao saldo da conta;

function Saque(){
	let de = Number(prompt("Quanto deseja Sacar ?:"))
	if (de < contA.Saldo){
	contA.Saldo = contA.Saldo - de;
	console.log(de, 'Retirado(s) de sua conta.')
}
else {
	console.log("\nValor de Saque superior ao Saldo. Operacao nao concluida...\n")
}
}
//Retira valor do saldo;

function Saldow(){
	console.log('Seu saldo eh de :', contA.Saldo);
}
//Retorna o saldo presente na conta;

function esqueci(){
	let dt = Number(prompt("Qual sua data de nascimento? :"))
	if (dt === contA.Datanacimento){///
		let digt = Number(prompt("Digito da conta :"));
		if (digt > digito.length){//
			console.log("Digito maior que um caractere.");
		}//
		else if (digt === contA.Digito){////
			console.log("Agencia :", contA.Agencia, "\n");
			console.log("Dica de senha :", dicaSenha, "\n");
			let ssn = Number(prompt("Sua senha :"));
			if (ssn === contA.Senha){/////
				console.log(contA);
			}/////
			else {
				console.log("Senha incorreta.");
			}
		}////
	}///
	else {
		console.log("Dados incorretos.")
	}
}
//Permite ao usuário recuperar seus dados caso os perca;

function user(){
	console.log(contA);
}
//Imprime o usuário completamente;

function altDicasenha(){
	let nds = prompt("Nova dica de senha :");
	if (nds != dicaSenha){
	dicaSenha = nds;
	console.log("Dica de senha alterada com Sucesso!");
}
else {
	console.log("A nova dica de senha nao pode ser igual a anterior.")
}
}
//Altera a dica de senha utilizada para recuperá-a em caso de perca;

function sobre(){
	console.log('\n********~~~~~~~~********\n');
	console.log('App JS Bank');
	console.log('****************');
	console.log('Versao : 1.0.1');
	console.log('****************');
	console.log('Dev : AlanJS ;)');
	console.log('\n********~~~~~~~~********\n');
}
//Sobre o programa;

var opcao = -1

do {
	imprimirMenu()
	opcao = Number(prompt("Digite uma opcao :"));

	switch (opcao) {
		case 1:
		cadastrarUser()
		break

		case 2:userSearch()
		break

		case 3:deposito()
		break

		case 4:
		Saque()
		break

		case 5:
		Saldow()
		break

		case 6:
		user()
		break

		case 7:
		alterarDados()
		break

		case 8:
		esqueci()
		break

		case 9:
		altDicasenha()
		break

		case 10:
		sobre()
		break
	}
} while (opcao != 0);
//Laço principal do programa;