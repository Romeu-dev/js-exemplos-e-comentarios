// ==============================
// 📚 STRINGS EM JAVASCRIPT
// ==============================

// Uma string é um texto entre aspas (simples, duplas ou crase).
let nome = "Ana";
let sobrenome = "Silva";
let saudacao = `Olá, ${nome} ${sobrenome}!`; // Template literal

console.log(saudacao); // Olá, Ana Silva!

// ------------------------------
// 🔤 MÉTODOS BÁSICOS DE STRING
// ------------------------------

// length - Tamanho da string
let linguagem = "JavaScript";
console.log(linguagem.length); // 10

// toUpperCase / toLowerCase - Letras maiúsculas e minúsculas
console.log(linguagem.toUpperCase()); // "JAVASCRIPT"
console.log(linguagem.toLowerCase()); // "javascript"

// includes - Verifica se contém determinado texto
console.log(linguagem.includes("Script")); // true

// indexOf - Retorna a posição de um trecho (ou -1 se não encontrar)
console.log(linguagem.indexOf("a")); // 1

// replace - Substitui parte da string
let frase = "Estudar JavaScript é divertido!";
let novaFrase = frase.replace("divertido", "incrível");
console.log(novaFrase); // Estudar JavaScript é incrível!

// slice - Recorta parte da string (início, fim)
console.log(linguagem.slice(0, 4)); // "Java"

// trim - Remove espaços no início e fim
let textoEspacado = "   Olá mundo!   ";
console.log(textoEspacado.trim()); // "Olá mundo!"

// charAt e acesso por índice
console.log(linguagem.charAt(0)); // "J"
console.log(linguagem[1]); // "a"

// ------------------------------
// 💪 EXERCÍCIOS PRÁTICOS
// ------------------------------

// 1. Crie uma variável com seu nome completo e mostre quantos caracteres ela tem
let nomeCompleto = "Maria Fernanda Lima";
console.log(nomeCompleto.length); // 20

// 2. Verifique se seu nome contém a palavra "Fernanda"
console.log(nomeCompleto.includes("Fernanda")); // true

// 3. Substitua seu último sobrenome por "Silva"
let nomeAlterado = nomeCompleto.replace("Lima", "Silva");
console.log(nomeAlterado); // Maria Fernanda Silva

// 4. Pegue apenas o primeiro nome da string
let primeiroNome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "));
console.log(primeiroNome); // Maria

// 5. Converta seu nome para letras maiúsculas
console.log(nomeCompleto.toUpperCase()); // "MARIA FERNANDA LIMA"

// 6. Remova espaços extras da string abaixo
let baguncado = "   Programar é massa!   ";
console.log(baguncado.trim()); // "Programar é massa!"

// 7. Pegue a última letra do seu nome
console.log(nomeCompleto.charAt(nomeCompleto.length - 1)); // "a"

// 8. Crie uma mensagem usando template literal:
let idade = 25;
console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`);

// ==============================
// 🔍 MÉTODOS MAIS AVANÇADOS DE STRINGS
// ==============================

let texto = "JavaScript é uma linguagem poderosa e flexível.";

// split() - Divide a string em um array
let palavras = texto.split(" "); // separa por espaço
console.log(palavras);
// ["JavaScript", "é", "uma", "linguagem", "poderosa", "e", "flexível."]

// join() - Junta os elementos de um array em uma string
let fraseMontada = palavras.join(" - ");
console.log(fraseMontada);
// "JavaScript - é - uma - linguagem - poderosa - e - flexível."

// repeat() - Repete a string várias vezes
let risada = "ha".repeat(5);
console.log(risada); // "hahahahaha"

// padStart() - Adiciona caracteres no início da string até atingir um comprimento
let codigo = "7";
console.log(codigo.padStart(4, "0")); // "0007"

// padEnd() - Adiciona caracteres no final da string
console.log(codigo.padEnd(4, "*")); // "7***"

// startsWith() e endsWith() - Verifica início ou fim da string
console.log(texto.startsWith("Java")); // true
console.log(texto.endsWith(".")); // true

// match() - Retorna resultado de uma expressão regular
let resultado = texto.match(/\b\w{6}\b/g); // palavras com 6 letras
console.log(resultado); // ["Script", "poderosa"]

// search() - Busca com regex e retorna o índice
console.log(texto.search(/linguagem/)); // 18

// localeCompare() - Compara duas strings em ordem alfabética (útil para ordenação)
console.log("banana".localeCompare("abacate")); // 1 (banana vem depois)
console.log("abacate".localeCompare("banana")); // -1

// normalize() - Normaliza acentuação (útil pra comparar textos com e sem acento)
let acentuado = "ação";
let normalizado = acentuado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(normalizado); // "acao"

// ------------------------------
// 🧠 EXERCÍCIOS DESAFIO
// ------------------------------

// 1. Crie uma função que conte quantas palavras existem em uma frase
function contarPalavras(frase) {
  return frase.trim().split(/\s+/).length;
}
console.log(contarPalavras("  Programar em JavaScript é divertido! ")); // 5

// 2. Verifique se um texto termina com ponto final
function terminaComPonto(texto) {
  return texto.trim().endsWith(".");
}
console.log(terminaComPonto("Essa frase termina com ponto.")); // true

// 3. Remova os acentos de uma string
function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
console.log(removerAcentos("Olá, você gosta de programação?")); // "Ola, voce gosta de programacao?"

// 4. Formate um número de 1 a 999 como código com 3 dígitos
function formatarCodigo(num) {
  return String(num).padStart(3, "0");
}
console.log(formatarCodigo(7)); // "007"
console.log(formatarCodigo(85)); // "085"
console.log(formatarCodigo(999)); // "999"

// Fim da parte avançada 🚀
