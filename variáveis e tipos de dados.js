//  🟨 Declarando variáveis
// Você pode usar let, const ou var (mas hoje em dia let e const são os mais usados).

let nome = "Maria";
const idade = 35;
var cidade = "São Paulo";

//  Entenda bem a diferença entre let, const e var.

// 🔹let  Pode mudar depois de ser declarada.
// Tem escopo de bloco (ou seja, só existe dentro do { ... } onde foi criada).
// Não pode ser redeclarada no mesmo escopo.

let nome1 = "João";
nome1 = "Maria"; // ok

if (true) {
  let idade = 30;
  console.log(idade); // 30
}

// console.log(idade); ❌ erro: idade is not defined

//  🔸 const
//  É constante, ou seja, não pode mudar (valor fixo).
//  Também tem escopo de bloco.
//  Muito usado quando você não quer que a variável seja alterada.

const pi = 3.14;
// pi = 3.1415; ❌ erro

const pessoa = { nome: "Ana" };
pessoa.nome = "Beatriz"; // ✅ isso pode, porque o objeto em si pode mudar

// ⚠️ var (evite usar, mas saiba que existe)
// Foi a forma padrão antes do ES6 (2015).
// Tem escopo de função, ou seja, ignora blocos { ... } como if, for, etc.
// Pode ser redeclarada, o que pode causar bugs difíceis de encontrar.

var cidade = "São Paulo";
var cidade = "Rio"; // ✅ isso funciona, mas é perigoso

if (true) {
  var pais = "Brasil";
}
console.log(pais); // ✅ Brasil (mesmo fora do bloco) – ⚠️ cuidado com isso!

// 🟩 Quando usar cada um?
// Use let quando o valor vai mudar.
// Use const quando o valor não vai mudar (preferência geral).
// Evite usar var.

// Escopo de variáveis com let e const

let filme = "O Senhor dos Anéis"; // {1}

//  var filme = 'Batman vs Superman'; // erro, filme já foi declarado

function fãDeStarWars() {
  const filme = "Star Wars"; // {2}
  return filme;
}

function fãDaMarvel() {
  filme = "Os Vingadores"; // {3}
  return filme;
}

function fãDeBlizzard() {
  const éFã = true;
  let frase = "Warcraft"; // {4}
  console.log("Antes do if: " + frase);

  if (éFã) {
    let frase = "Texto inicial"; // {5}
    frase = "Pela Horda"; // {6}
    console.log("Dentro do if: " + frase);
  }

  frase = "Pela Aliança!"; // {7}
  console.log("Depois do if: " + frase);
}

console.log(filme); // {8} Exibe a variável filme global: "O Senhor dos Anéis".
console.log(fãDeStarWars()); // {9} Chama a função fãDeStarWars(), que retorna "Star Wars".
console.log(fãDaMarvel()); // {10} Chama fãDaMarvel(), que altera a variável filme global para "Os Vingadores".
console.log(filme); // {11} Agora, filme foi alterado e ao imprimir, mostra "Os Vingadores".
fãDeBlizzard(); // {12} Chama fãDeBlizzard(), exibindo mensagens sobre a variável frase antes, dentro e depois do if.

// ===== TIPOS DE DADOS EM JAVASCRIPT =====

// 1. STRING - Cadeia de caracteres (textos)
let nome2 = "João";
let mensagem = "Olá, mundo!";
let template = `Meu nome é ${nome}`;
console.log(nome, mensagem, template);

// 2. NUMBER - Números inteiros e decimais
let idade1 = 30;
let altura = 1.75;
let soma = 10 + 5;
console.log(idade, altura, soma);

// 3. BOOLEAN - Verdadeiro ou falso (usado em condições)
let estaLogado = true;
let temPermissao = false;
console.log(estaLogado, temPermissao);

// 4. UNDEFINED - Variável declarada, mas ainda sem valor
let endereco;
console.log(endereco); // undefined

// 5. NULL - Valor nulo (definido manualmente como "vazio")
let resposta = null;
console.log(resposta); // null

// 6. OBJECT - Estrutura que armazena dados em pares chave: valor
let pessoa = {
  nome: "Ana",
  idade: 28,
  profissao: "Psicóloga",
};
console.log(pessoa);
console.log(pessoa.nome); // Acessando uma propriedade do objeto

// 7. ARRAY - Lista de valores (índices começam do 0)
let cores = ["azul", "verde", "vermelho"];
let numeros = [1, 2, 3, 4, 5];
console.log(cores);
console.log(cores[1]); // verde

// 8. SYMBOL - Tipo único e imutável (avançado, pouco usado no básico)
let simbolo = Symbol("id");
console.log(simbolo);

// 9. BIGINT - Para números inteiros muito grandes (acima do Number normal)
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande);

// ===== VERIFICANDO TIPOS COM typeof =====
console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof estaLogado); // boolean
console.log(typeof endereco); // undefined
console.log(typeof resposta); // object (sim, typeof null retorna 'object' por histórico do JS)
console.log(typeof pessoa); // object
console.log(typeof cores); // object (arrays também são objetos!)
console.log(typeof simbolo); // symbol
console.log(typeof numeroGrande); // bigint

// JavaScript converte alguns valores automaticamente para true ou false:

// Valores Considerados true
console.log(Boolean(1)); // true
console.log(Boolean("texto")); // true
console.log(Boolean([])); // true (array vazio)
console.log(Boolean({})); // true (objeto vazio)
console.log(Boolean(Infinity)); // true
// Valores considerados false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false (string vazia)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
