// Importa a interface de leitura e escrita para interações com o usuário
const { rl } = require("../utilidades/readline");

// Importa a instância do personagem Tom
const { tom } = require("../personagens/instancias");

// Importa a função typeWriter para exibir texto com efeito de máquina de escrever
const { typeWriter } = require("../utilidades/typeWritter");

// Importa a função para mudar o ambiente do jogo
const { mudarDeLocal } = require("../alterar_ambiente/gerenciadorAmbientes");

// Importa as listas de itens e a função para aumentar o dano dos itens
const {
  sala,
  cozinha,
  quarto,
  porao,
  sotao,
  aumentarDanoItens,
} = require("../itens_dos_comodos/itensArremeco");

// Função para exibir as opções principais para o jogador
function primaryChoices() {
  console.clear();

  // Mensagem informativa sobre as opções disponíveis para modificar os atributos de Tom ou iniciar com os atributos padrão
  console.log(
    "\nVocê pode optar por iniciar a caça modificando alguns dos atributos básicos do Tom ou iniciar de maneira padrão."
  );
  console.log("\n1. Treinar os músculos? (Aumenta 25 de vida e 10 de energia)");
  console.log(
    "\n2. Converter a energia em vida? (Converte 55 de energia em 35 de vida)"
  );
  console.log(
    "\n3. Tomar REDBULL na veia? (Aumenta 100 de vida e diminui 60 de energia (BÔNUS DE DANO de 25%!))"
  );
  console.log(
    "\n4. Continuar com atributos padrões? (99 de vida e 99 de energia)"
  );

  console.log("\nMudar de ambiente custará 15 de energia!");
  console.log(
    "\nSe ficar sem energia ou muito baixa, tom é nocauteado por exaustão!"
  );

  console.log(
    "\n### ATENÇÃO! ### JERRY pode soltar ARMADILHAS nos cômodos que lhe custarão alguns pontos de vida, caso o TOM caia em alguma! ###"
  );

  // Pergunta ao jogador qual opção ele deseja escolher
  rl.question("\nEscolha uma das opções: ", (answer) => {
    let delay = 5000; // Tempo de atraso entre ações para permitir a leitura do texto

    switch (answer) {
      case "1":
        console.clear();
        // Exibe uma mensagem sobre o treinamento com efeito de máquina de escrever
        typeWriter("\nTreinando os músculos...", 10);
        // Aumenta a vida e a energia de Tom
        tom.vida += 25;
        tom.energia += 10;
        // Após o atraso, exibe os atributos atualizados e chama a função para mudar de ambiente
        setTimeout(() => {
          console.log(
            "\nTreinamento concluído!" + "\n" + tom.getAtributos("Tom")
          );
          setTimeout(() => mudarDeLocal(), delay);
        }, delay);
        break;

      case "2":
        console.clear();
        // Exibe uma mensagem sobre a conversão de energia em vida com efeito de máquina de escrever
        typeWriter("\nConvertendo a energia em vida...", 10);
        // Converte energia em vida, ajustando os atributos de Tom
        tom.vida += 35;
        tom.energia -= 55;
        // Após o atraso, exibe os atributos atualizados e chama a função para mudar de ambiente
        setTimeout(() => {
          console.log(
            "\nConversão concluída!" + "\n" + tom.getAtributos("Tom")
          );
          setTimeout(() => mudarDeLocal(), delay);
        }, delay);
        break;

      case "3":
        console.clear();
        // Informa sobre o aumento do dano dos itens e exibe um alerta sobre o nível de energia
        console.log("Essa opção aumenta o dano de todos os itens em 25!");
        console.log("\nCuidado com seu nível de energia!");
        // Exibe uma mensagem sobre o efeito do REDBULL com efeito de máquina de escrever
        typeWriter("\nTomando REDBULL na veia...", 30);
        // Aumenta a vida e reduz a energia de Tom, e aumenta o dano dos itens em todos os ambientes
        tom.vida += 100;
        tom.energia -= 60;
        aumentarDanoItens(sala);
        aumentarDanoItens(cozinha);
        aumentarDanoItens(quarto);
        aumentarDanoItens(porao);
        aumentarDanoItens(sotao);
        // Após o atraso, exibe os atributos atualizados e chama a função para mudar de ambiente
        setTimeout(() => {
          console.log(
            "\nSuper poderes ativados!" + "\n" + tom.getAtributos("Tom")
          );
          setTimeout(() => mudarDeLocal(), delay);
        }, delay);
        break;

      case "4":
        console.clear();
        // Exibe uma mensagem sobre continuar com atributos padrão com efeito de máquina de escrever
        typeWriter("\nContinuando com atributos padrões...", 10);
        // Após o atraso, exibe os atributos padrão e chama a função para mudar de ambiente
        setTimeout(() => {
          console.log(
            "\nAtributos iniciais mantidos!" + "\n" + tom.getAtributos("Tom")
          );
          setTimeout(() => mudarDeLocal(), delay);
        }, delay);
        break;

      default:
        console.clear();
        // Mensagem para opção inválida e solicitação para tentar novamente
        console.log("Opção inválida! Tente novamente.");
        setTimeout(() => primaryChoices(), 3000);
        break;
    }
  });
}

// Exporta a função primaryChoices para ser utilizada em outros módulos
module.exports = { primaryChoices };
