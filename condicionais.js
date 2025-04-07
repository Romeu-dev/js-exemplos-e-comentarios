// As e struturas condicionais permitem que o código execute diferentes blocos de insruções
// dependendo de condições especificas

// ===== CONDICIONAIS EM JAVASCRIPT =====

// IF - SE a condição for verdadeira, executa o bloco
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

// IF / ELSE - Se a condição for falsa, executa o bloco do ELSE
let temCarteira = false;

if (temCarteira) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

// ELSE IF - Usado quando há várias condições diferentes
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// CONDIÇÃO COMPARANDO STRINGS
let corFavorita = "azul";

if (corFavorita === "azul") {
  console.log("Azul é uma cor tranquila.");
} else if (corFavorita === "vermelho") {
  console.log("Vermelho é uma cor vibrante.");
} else {
  console.log("Legal! Gosto dessa cor também.");
}

// OPERADORES LÓGICOS nas condições
let estaSol = true;
let temDinheiro = false;

if (estaSol && temDinheiro) {
  console.log("Vamos à praia!");
} else {
  console.log("Plano cancelado.");
}

// === SWITCH CASE ===
// Mais limpo para várias comparações com o mesmo valor
let diaDaSemana = "quarta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Começo da semana!");
    break;
  case "quarta":
    console.log("Metade da semana.");
    break;
  case "sexta":
    console.log("Finalmente sexta!");
    break;
  default:
    console.log("Dia comum.");
    break;
}

// Exercícios

//Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite"
// com base em um valor da variável hora.

let hora1 = 17;
if (hora1 < 12) {
  console.log("Bom dia ");
} else if (hora1 < 18) {
  console.log("boa tarde");
} else {
  console.log("Boa noite");
}

//Use um switch para exibir o nome de um mês com base em um número
// (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = 3;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  default:
    console.log("Numero invalido");
}
//Crie um programa que verifica se uma pessoa pode dirigir.
// Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".

let idade1 = 18;

if (idade1 >= 18) {
  console.log("pode Dirigir!");
} else {
  console.log("Não pode dirigir! ");
}

//Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba
// "Saldo positivo" ou "Saldo negativo".

let saldo = 5;

let saldoAtual = saldo >= 0 ? "Saldo positivo" : "saldo negativo";
console.log(saldoAtual);

//Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
let numero = 5;

if (numero > 0) {
  console.log("Positivo!");
} else if (numero < 0) {
  console.log("Negativo!");
} else {
  console.log("Zero");
}

//Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo".
//  Use switch para processar a escolha.

let caixa = 1;

switch (caixa) {
  case 1:
    console.log("Sacar");
    break;
  case 2:
    console.log("Depositar");
    break;
  case 3:
    console.log("Saldo");
    break;
  default:
    console.log("Opção invalida");
}
