// Define a função `typeWriter` que simula o efeito de digitação de uma mensagem no terminal
// A função recebe dois parâmetros: `message` (a mensagem a ser digitada) e `delay` (o atraso entre cada caractere em milissegundos)
function typeWriter(message, delay) {
  // Inicializa a variável `index` com o valor 0, que será usada para rastrear a posição atual no `message`
  let index = 0;

  // Define a função `printChar` que será responsável por imprimir um caractere de cada vez
  function printChar() {
    // Verifica se o índice atual é menor que o comprimento da mensagem
    // Isso garante que a função só tente imprimir caracteres dentro do limite da mensagem
    if (index < message.length) {
      // Imprime o caractere atual da mensagem no terminal sem adicionar uma nova linha
      process.stdout.write(message[index]);
      // Incrementa o índice para apontar para o próximo caractere na próxima chamada
      index++;
      // Define um atraso antes de chamar `printChar` novamente, criando o efeito de digitação
      setTimeout(printChar, delay);
    } else {
      // Quando todos os caracteres forem impressos, imprime uma nova linha para terminar a mensagem
      process.stdout.write("\n");
    }
  }

  // Chama a função `printChar` pela primeira vez para iniciar o processo de digitação
  printChar();
}

// Exporta a função `typeWriter` para que possa ser usada em outros módulos
module.exports = { typeWriter };
