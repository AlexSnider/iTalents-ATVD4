// Importa o módulo readline do Node.js, que fornece uma maneira de ler uma linha de cada vez da entrada padrão
const readline = require("node:readline");

// Desestrutura stdin (entrada padrão) e stdout (saída padrão) do objeto process
const { stdin: input, stdout: output } = require("process");

// Cria uma interface readline que permite ler dados da entrada padrão e escrever na saída padrão
const rl = readline.createInterface({ input, output });

// Exporta a interface readline para que possa ser utilizada em outros módulos
module.exports = { rl };
