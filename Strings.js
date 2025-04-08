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

// Fim! 🚀
