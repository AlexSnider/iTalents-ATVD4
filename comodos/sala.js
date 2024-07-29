// Importa a interface readline para interação com o usuário
const { rl } = require("../utilidades/readline");

// Importa as instâncias dos personagens Tom e Jerry
const { tom, jerry } = require("../personagens/instancias");

// Importa o item encontrado por Tom na sala
const { salaItem } = require("../itens_dos_comodos/itensArremeco");

// Importa o item de armadilha da sala
const { salaItemArmadilha } = require("../itens_dos_comodos/itensArmadilha");

// Importa a função para lidar com armadilhas
const { lidarComArmadilha } = require("../utilidades/setTrap");

// Importa a função para exibir texto com efeito de máquina de escrever
const { typeWriter } = require("../utilidades/typeWritter");

// Importa a função para verificar eventos aleatórios, como a presença de Jerry
const { checkAssertion } = require("../utilidades/randomAssertions");

// Função para perguntar ao usuário se deseja tentar acertar Jerry com o item
function perguntarSeJogarItem(callback) {
  rl.question(
    `\nDeseja tentar acertar Jerry com o(a) ${salaItem.item.toUpperCase()} encontrado(a) por Tom? (sim/nao) `,
    (resposta) => {
      // Verifica se a resposta é válida
      if (resposta === "sim" || resposta === "nao") {
        callback(resposta); // Chama o callback com a resposta do usuário
      } else {
        console.clear(); // Limpa o console para nova entrada
        console.log(
          "Resposta inválida! Por favor, responda com 'sim' ou 'nao'." // Mensagem de erro
        );
        perguntarSeJogarItem(callback); // Repete a pergunta se a resposta for inválida
      }
    }
  );
}

// Função que simula a interação de Tom na sala
function sala() {
  // Verifica se Jerry está na sala e se Tom acerta o item
  const procurarJerry = checkAssertion(); // Determina se Jerry está na sala
  const acertouJerry = checkAssertion(); // Determina se Tom acerta o item
  console.clear(); // Limpa o console para nova visualização

  console.log("Tom está na sala..."); // Mensagem inicial
  setTimeout(() => {
    console.log("\nOlhando para um lado e para o outro..."); // Mensagem sobre a busca de Tom
    setTimeout(() => {
      console.log("\nEis que..."); // Mensagem indicando que algo está prestes a acontecer

      // Se Jerry for encontrado
      if (procurarJerry) {
        setTimeout(() => {
          console.clear(); // Limpa o console antes da próxima mensagem
          typeWriter(
            "\nEle avista Jerry caminhando lentamente pela sala...",
            20 // Exibe a mensagem com efeito de digitação
          );

          setTimeout(() => {
            // Lida com a armadilha, se houver
            lidarComArmadilha(salaItem, salaItemArmadilha, "Sala");

            setTimeout(() => {
              console.log(
                `\nPor sorte, Tom conseguiu agarrar o(a) ${salaItem.item.toUpperCase()} que havia visto de antemão para tentar acertar em Jerry...`
              );
              console.log(
                `\nO(a) item tem capacidade de causar ${salaItem.dano} de dano em Jerry...`
              );
              setTimeout(() => {
                // Pergunta ao usuário se deseja jogar o item
                perguntarSeJogarItem((resposta) => {
                  if (resposta === "sim") {
                    console.clear(); // Limpa o console antes da próxima mensagem
                    // Se Tom acertar Jerry
                    if (acertouJerry) {
                      console.log(
                        `\nO(a) ${salaItem.item.toUpperCase()} encontrado por Tom causou ${
                          salaItem.dano
                        } de dano em Jerry!`
                      );

                      // Aplica o dano a Jerry e exibe os atributos atualizados
                      tom.jogarItem(jerry, "Sala", salaItem.dano);
                      jerry.verificarVida("Jerry"); // Verifica se Jerry ainda está vivo
                      console.log(jerry.getAtributos("Jerry")); // Exibe os atributos de Jerry

                      setTimeout(() => {
                        console.log(
                          "\nJERRY fugiu da sala e se escondeu novamente. Tom precisa encontrá-lo!"
                        );

                        setTimeout(() => {
                          // Muda para um novo ambiente
                          require("../alterar_ambiente/gerenciadorAmbientes").mudarDeLocal();
                        }, 8000); // Atraso de 8 segundos
                      }, 3000); // Atraso de 3 segundos
                    } else {
                      console.clear(); // Limpa o console
                      console.log(
                        "O item causou ZERO de dano em Jerry pois Tom errou!"
                      );
                      console.log("\nQue mira horrível ele tem...");
                      console.log(
                        "\nAlém disso, Jerry acaba de fugir para outro cômodo..."
                      );
                      setTimeout(
                        () =>
                          require("../alterar_ambiente/gerenciadorAmbientes").mudarDeLocal(),
                        6000 // Atraso de 6 segundos
                      );
                    }
                  } else if (resposta === "nao") {
                    console.clear(); // Limpa o console
                    console.log(
                      "Tom desiste do objeto pois está procurando algo que possa causar maiores danos..."
                    );
                    setTimeout(
                      () =>
                        require("../alterar_ambiente/gerenciadorAmbientes").mudarDeLocal(),
                      3000 // Atraso de 3 segundos
                    );
                  }
                });
              }, 2000); // Atraso de 2 segundos
            }, 3000); // Atraso de 3 segundos
          }, 2000); // Atraso de 2 segundos
        }, 2000); // Atraso de 2 segundos
      } else {
        // Se Jerry não for encontrado
        setTimeout(() => {
          console.clear(); // Limpa o console
          typeWriter("Ahhhhhhg, parece que o Jerry não está na sala...", 10); // Exibe a mensagem com efeito de digitação

          setTimeout(
            () =>
              require("../alterar_ambiente/gerenciadorAmbientes").mudarDeLocal(),
            4000 // Atraso de 4 segundos
          );
        }, 2000); // Atraso de 2 segundos
      }
    }, 2000); // Atraso de 2 segundos
  }, 2000); // Atraso de 2 segundos
}

// Exporta a função sala para ser utilizada em outros módulos
module.exports = { sala };
