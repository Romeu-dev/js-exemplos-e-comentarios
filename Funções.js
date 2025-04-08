// 🔹 O que é uma função?
// Uma função é um bloco de código reutilizável que executa uma tarefa específica.
// Em JavaScript, funções são cidadãs de primeira classe, ou seja, podem ser atribuídas a variáveis,
// passadas como argumentos ou retornadas por outras funções.
function saudacao() {
  console.log("Olá!");
}
saudacao(); // Executa a função

// 🔹 Parâmetros e retorno
// Funções podem receber parâmetros (valores de entrada) e retornar valores:

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3)); // 5

//🔹 Funções anônimas e arrow functions
// Funções anônimas são funções sem nome, normalmente atribuídas a variáveis:

const dobroDoNumero = function (n) {
  return n * 2;
};

//Arrow functions são uma forma mais curta de escrever funções:
const triploDoNumero = (n) => n * 3;

// 🔹 Escopo de função
// Variáveis declaradas dentro de uma função só existem naquele escopo:

function exemplo() {
  let interna = "visível só aqui";
  console.log(interna);
}
// console.log(interna); // Erro: não existe fora da função

//🔹 Função como parâmetro (callback)
// Você pode passar uma função como argumento para outra:

function executar(fn) {
  fn();
}

executar(() => console.log("Função passada como parâmetro"));

// 🔹 Funções que retornam funções (closure)
// Uma closure é quando uma função "lembra" do escopo em que foi criada:

function saudador(nome) {
  return function () {
    console.log(`Olá, ${nome}`);
  };
}

const saudarMaria = saudador("Maria");
saudarMaria(); // Olá, Maria

//  🔹 call, apply e bind

// 🔸 call()
// Permite invocar uma função com um contexto (this) específico:

function apresentar() {
  console.log(`Meu nome é ${this.nome}`);
}

const pessoa = { nome: "João" };
apresentar.call(pessoa); // Meu nome é João

// 🔸 apply()
// É quase igual ao call, mas recebe os argumentos em um array:

function somar(a, b) {
  return a + b;
}

console.log(somar.apply(null, [2, 3])); // 5

// 🔸 bind()
// Cria uma nova função com this fixo:

const obj = {
  nome: "Ana",
};

function falar() {
  console.log(this.nome);
}

const falarComAna = falar.bind(obj);
falarComAna(); // Ana

//  🔹 Recursão
// É quando uma função chama a si mesma:

function contagem(n) {
  if (n === 0) return;
  console.log(n);
  contagem(n - 1);
}
contagem(3); // 3 2 1

//   🔹 Parâmetros padrão
//   Você pode definir valores padrão para parâmetros:

function saudacao(nome = "visitante") {
  console.log(`Olá, ${nome}`);
}
saudacao(); // Olá, visitante

// ✅ Declaração de função
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Lucas")); // Olá, Lucas!

// ---------------------------------
// ✅ Expressão de função
const dobro = function (numero) {
  return numero * 2;
};

console.log(dobro(5)); // 10

// ---------------------------------
// ✅ Arrow function (função de seta)
const quadrado = (n) => {
  return n * n;
};

console.log(quadrado(4)); // 16

// Se tiver só 1 parâmetro e 1 linha de retorno, pode simplificar:
const triplo = (n) => n * 3;
console.log(triplo(3)); // 9

// ---------------------------------
// ✅ Parâmetros com valor padrão
function boasVindas(nome = "visitante") {
  return `Bem-vindo, ${nome}`;
}

console.log(boasVindas()); // Bem-vindo, visitante

// ---------------------------------
// ✅ Função dentro de função (closure)
function saudador(prefixo) {
  return function (nome) {
    return `${prefixo} ${nome}`;
  };
}

const ola = saudador("Olá");
console.log(ola("Maria")); // Olá Maria

// ---------------------------------
// ✅ Callback (função passada como parâmetro)
function processar(valor, funcao) {
  return funcao(valor);
}

function dobrar(n) {
  return n * 2;
}

console.log(processar(10, dobrar)); // 20

// Com arrow:
console.log(processar(7, (n) => n + 1)); // 8

// ---------------------------------
// ✅ Recursão (função que chama a si mesma)
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120

// ---------------------------------
// ✅ Funções como objetos de primeira classe
// (podem ser atribuídas, passadas e retornadas)

const operacoes = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
};

console.log(operacoes.somar(10, 5)); // 15

// ---------------------------------
// 💪 DESAFIOS PRÁTICOS
// ---------------------------------

// 1. Crie uma função que recebe dois números e retorna a média
function media(a, b) {
  return (a + b) / 2;
}
console.log(media(6, 8)); // 7

// 2. Crie uma arrow function que verifica se um número é par
const ehPar = (n) => n % 2 === 0;
console.log(ehPar(10)); // true

// 3. Crie uma função que recebe outra função como parâmetro e executa
function executar(fn) {
  console.log("Executando a função:");
  fn();
}

executar(() => console.log("Sou uma função callback!"));

// 4. Crie uma função que retorna outra função para multiplicar por X
function multiplicador(x) {
  return function (y) {
    return x * y;
  };
}

const vezes3 = multiplicador(3);
console.log(vezes3(4)); // 12

// 5. Crie uma função recursiva para contar de N até 1
function contagemRegressiva(n) {
  if (n === 0) return;
  console.log(n);
  contagemRegressiva(n - 1);
}

contagemRegressiva(5); // 5 4 3 2 1

// Fim do módulo de funções 🚀
