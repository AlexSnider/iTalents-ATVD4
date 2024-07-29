// Importa as instâncias dos personagens Tom e Jerry
const { tom, jerry } = require("../personagens/instancias");

// Importa a função para exibir um desenho (provavelmente uma imagem ASCII)
const { exibirDesenho } = require("../asc_img/ascImg");

// Importa a função que verifica se uma determinada condição aleatória é verdadeira
const { checkAssertion } = require("./randomAssertions");

// Importa a função que simula o efeito de digitação no terminal
const { typeWriter } = require("./typeWritter");

// Determina aleatoriamente se Tom caiu na armadilha de Jerry
const caiuNaArmadilha = checkAssertion();

// Função para lidar com a armadilha no ambiente especificado
function lidarComArmadilha(item, itemArmadilha, ambienteNome) {
  // Limpa o console
  console.clear();
  // Exibe uma mensagem informando que Tom está procurando algo para nocautear Jerry
  console.log(
    `Tom sabe que precisa nocautear Jerry com alguma coisa, então, procura por algo...`
  );
  // Exibe a informação do item que Tom encontrou e o dano que pode causar a Jerry
  console.log(
    `\nTom encontra ${item.item.toUpperCase()} que tem possibilidade de causar ${
      item.dano
    } de dano em Jerry!`
  );

  // Se Tom caiu na armadilha de Jerry
  if (caiuNaArmadilha) {
    // Exibe uma mensagem informando que Tom caiu na armadilha
    console.log(
      `\nMAS... antes que pudesse tomar qualquer decisão, Tom acaba de cair em uma Armadilha de Jerry enquanto tenta agarrar o(a) uma(um) ${item.item}!`
    );

    // Exibe a informação da armadilha e o dano causado a Tom
    console.log(
      `\nA armadilha de Jerry onde ele usa ${itemArmadilha.item.toUpperCase()} para tentar pegar Tom, causou ${
        itemArmadilha.dano
      } de dano em Tom, infelizmente!`
    );
    // Aplica o dano a Tom usando a função `colocarArmadilha` de Jerry
    jerry.colocarArmadilha(tom, ambienteNome, itemArmadilha.dano);

    // Verifica e exibe a vida atual de Tom
    tom.verificarVida("Tom");

    // Exibe os atributos atualizados de Tom
    console.log(tom.getAtributos("Tom"));
  } else {
    // Se Tom não caiu na armadilha
    console.clear();
    // Exibe uma mensagem informando que Tom percebeu a armadilha e escapou
    console.log(
      `\nMAS... antes que pudesse tomar qualquer decisão, Tom percebe que o Jerry armou uma Armadilha usando ${itemArmadilha.item.toUpperCase()}!`
    );
    typeWriter(`E... UFFA! Ele se esquiva e escapa ileso!`, 20);

    // Exibe os atributos de Tom e o desenho
    console.log(tom.getAtributos("Tom"), exibirDesenho());
  }
}

// Exporta a função `lidarComArmadilha` para que possa ser usada em outros módulos
module.exports = { lidarComArmadilha };
