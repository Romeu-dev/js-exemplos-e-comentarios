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
  s;
} else {
  console.log("Zero");
}

// Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo".
// Use switch para processar a escolha.

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

// ==============================
// 🔍 CONDICIONAIS AVANÇADAS EM JAVASCRIPT
// ==============================

// ---------------------------------
// ✅ Operador Ternário (condição ? valor1 : valor2)
let idade2 = 20;
let acesso = idade2 >= 18 ? "Permitido" : "Negado";
console.log(acesso); // Permitido

// Pode ser usado para retornar valores de forma mais enxuta:
let numero1 = 5;
let tipo = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(tipo); // Ímpar

// ---------------------------------
// ✅ Encadeamento de ternários (cuidado com legibilidade!)
let nota = 7.5;
let resultado =
  nota >= 9
    ? "Excelente"
    : nota >= 7
    ? "Aprovado"
    : nota >= 5
    ? "Recuperação"
    : "Reprovado";
console.log(resultado); // Aprovado

// ---------------------------------
// ✅ Switch - alternativa ao if-else com muitas opções
let dia = "terça";

switch (dia) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "terça":
  case "quarta":
  case "quinta":
    console.log("Meio da semana");
    break;
  case "sexta":
    console.log("Sextou!");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana");
    break;
  default:
    console.log("Dia inválido");
}

// ---------------------------------
// ✅ Short-circuit (curto-circuito lógico)

// AND (&&) - só executa a segunda parte se a primeira for verdadeira
let logado = true;
logado && console.log("Usuário está logado"); // Executa

// OR (||) - usa valor alternativo se o primeiro for falso
let nomeUsuario = "";
let nomeFinal = nomeUsuario || "Visitante";
console.log(nomeFinal); // "Visitante"

// ---------------------------------
// ✅ Nullish Coalescing (??) - considera apenas null ou undefined como falsos
let valor = 0;
let resultadoFinal = valor ?? 100; // NÃO considera 0 como "falsy"
console.log(resultadoFinal); // 0

// ---------------------------------
// ✅ Optional chaining (?.) - evita erro se propriedade não existir
let usuario = {
  nome: "Lucas",
  endereco: {
    cidade: "São Paulo",
  },
};

console.log(usuario.endereco?.cidade); // São Paulo
console.log(usuario.contato?.telefone); // undefined (sem erro)

// ---------------------------------
// 💪 DESAFIOS PRÁTICOS
// ---------------------------------

// 1. Use ternário para verificar se uma pessoa pode votar
let idadePessoa = 17;
let podeVotar = idadePessoa >= 16 ? "Pode votar" : "Não pode votar";
console.log(podeVotar);

// 2. Use switch para identificar o tipo de fruta
let fruta = "maçã";

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.");
    break;
  case "maçã":
    console.log("Maçã ajuda na digestão.");
    break;
  case "laranja":
    console.log("Laranja tem muita vitamina C.");
    break;
  default:
    console.log("Fruta não reconhecida.");
}

// 3. Use short-circuit para mostrar uma mensagem se um usuário estiver autenticado
let autenticado = false;
autenticado && console.log("Bem-vindo de volta!");

// 4. Use optional chaining para acessar o nome de um animal
let animal = {
  especie: "Gato",
  // nome não está definido
};
console.log(animal?.nome ?? "Nome desconhecido");

// 5. Crie uma função que recebe uma nota e retorne o conceito:
function conceito(nota) {
  return nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "D";
}
console.log(conceito(8)); // B

// Fim da parte avançada de condicionais 🧠💡
