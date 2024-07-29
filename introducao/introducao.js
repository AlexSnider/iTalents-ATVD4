// Importa a função typeWriter para exibir texto com efeito de máquina de escrever
const { typeWriter } = require("../utilidades/typeWritter");

// Importa a função primaryChoices para exibir as opções iniciais ao jogador
const { primaryChoices } = require("./primeirasEscolhas");

// Função para exibir a introdução do jogo
function introducao() {
  // Exibe uma mensagem de boas-vindas com um efeito de máquina de escrever
  typeWriter("### SEJA BEM VINDO AO JOGO DE CAÇA AO JERRY! ###", 10);

  // Após 1 segundo, exibe informações iniciais sobre o jogo
  setTimeout(() => {
    console.log("\nPrimeiramente, vamos entender como funciona o jogo.");
    console.log(
      "\nSeu personagem principal será o TOM, e a sua missão, é caçar o Jerry!"
    );
  }, 1000);

  // Após 7 segundos, limpa o console e exibe informações detalhadas sobre o jogo
  setTimeout(() => {
    console.clear();
    console.log("O jogo funciona da seguinte forma:");
    console.log(
      "\nCada personagem tem 99 pontos de vida e 99 pontos de energia."
    );
    console.log(
      "\nVocê pode preparar melhor o TOM para iniciar essa caça aumentando seus atributos com alguns treinamentos ou itens."
    );

    console.log(
      "\nVocê poderá escolher em qual ambiente quer começar a caçar o Jerry:"
    );
    console.log("\n1 - Sala");
    console.log("\n2 - Quarto");
    console.log("\n3 - Cozinha");
    console.log("\n4 - Porão");
    console.log("\n5 - Sótão");
  }, 7000);

  // Após 15 segundos, chama a função primaryChoices para permitir ao jogador fazer uma escolha
  setTimeout(() => {
    primaryChoices();
  }, 15000);
}

// Exporta a função introducao para ser utilizada em outros módulos
module.exports = { introducao };
