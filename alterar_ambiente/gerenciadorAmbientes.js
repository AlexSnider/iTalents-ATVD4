const { rl } = require("../utilidades/readline");  // Importa o módulo readline para gerenciar a entrada do usuário
const { typeWriter } = require("../utilidades/typeWritter");  // Importa a função typeWriter para exibir texto com efeito de digitação
const { mudarDeAmbiente } = require("./mudarAmbiente");  // Importa a função mudarDeAmbiente para mudar o ambiente do jogo
const locaisDisponiveis = require("./locais");  // Importa a lista de locais disponíveis onde o jogo pode ocorrer

// Função que gerencia a mudança de local no jogo
function mudarDeLocal() {
  console.clear(); // Limpa o console para uma nova exibição

  // Verifica se não há mais locais disponíveis para caçar Jerry
  if (locaisDisponiveis.length === 0) {
    console.log("Não há mais cômodos para caçar ao Jerry!"); // Mensagem informando o fim das opções
    console.log(
      "\nVocê visitou todos e não conseguiu nocautear o Jerry! Fim de jogo! GAME OVER!."
    ); // Mensagem de fim de jogo
    console.log("\nPelo menos, está vivo! :D"); // Mensagem final positiva
    process.exit(); // Encerra o processo do Node.js
  }

  // Exibe os locais disponíveis para o jogador escolher
  console.log("Escolha um cômodo para iniciar/continuar a caçar ao Jerry:\n");
  locaisDisponiveis.forEach((local, index) => {
    console.log(`${index + 1} - ${local.nome}`); // Mostra o número e o nome do local
  });

  // Opção para desistir e encerrar o jogo
  console.log(`${locaisDisponiveis.length + 1} - Desistir - GAME OVER!`);

  // Solicita a escolha do jogador
  rl.question("\nPor favor, escolha uma das opções para a caçar o Jerry: ", (resposta) => {
    const indice = parseInt(resposta, 10) - 1; // Converte a resposta do usuário para um número e ajusta para o índice da lista

    // Verifica se o índice escolhido é válido e dentro do range dos locais disponíveis
    if (indice >= 0 && indice < locaisDisponiveis.length) {
      const localEscolhido = locaisDisponiveis[indice]; // Obtém o local escolhido com base no índice
      locaisDisponiveis.splice(indice, 1); // Remove o local escolhido da lista de locais disponíveis
      mudarDeAmbiente(localEscolhido.nome, localEscolhido.func); // Chama a função para mudar o ambiente do jogo
    } else if (indice === locaisDisponiveis.length) { // Verifica se o usuário escolheu desistir
      console.clear();
      typeWriter("\nGAME OVER! :(", 15); // Exibe uma mensagem de fim de jogo com efeito de digitação
      setTimeout(() => process.exit(), 3000); // Encerra o processo após um breve atraso
    } else {
      console.log("Opção inválida! Por favor, escolha um número válido."); // Mensagem para opção inválida
      mudarDeLocal(); // Solicita novamente a escolha do jogador
    }
  });
}

module.exports = { mudarDeLocal }; // Exporta a função mudarDeLocal para ser usada em outros módulos
