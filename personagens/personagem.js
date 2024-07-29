// Importa a função typeWriter do módulo utilidades
const { typeWriter } = require("../utilidades/typeWritter");

// Define a classe Personagem
class Personagem {
  // Construtor da classe Personagem, que inicializa a vida e a energia com valores padrão
  constructor(vida = 99, energia = 99) {
    this.vida = vida; // Atributo vida do personagem
    this.energia = energia; // Atributo energia do personagem
  }

  // Método para mudar de ambiente, reduzindo a energia do personagem
  mudarAmbiente(nome, quantidadeDeEnergia) {
    // Verifica se a energia é suficiente para a mudança de ambiente
    if (this.energia - quantidadeDeEnergia >= 0) {
      // Se a energia é suficiente, reduz a energia pela quantidade especificada
      this.energia -= quantidadeDeEnergia;
    } else {
      // Se a energia não é suficiente, informa o jogador e encerra o jogo
      console.log(`\n${nome} está com a energia muito baixa ou zerada!`);
      console.log(`\n${nome} não conseguirá mudar de ambiente...`);
      console.log(`\n${nome} foi derrotado por exaustão!`);
      console.log(`\nGAME OVER!`);

      // Exibe uma mensagem com efeito de máquina de escrever
      typeWriter("\n\nCUIDADO COM SUAS OPÇÕES INICIAIS!", 50);

      // Encerra o processo após 3 segundos
      setTimeout(() => process.exit(), 3000);
    }
  }

  // Método para verificar a vida do personagem
  verificarVida(nome) {
    // Se a vida do personagem for menor ou igual a zero
    if (this.vida <= 0) {
      if (nome === "Tom") {
        // Se o personagem é Tom, exibe uma mensagem e encerra o jogo
        console.log(`\nTOM FOI NOCAUTEADO POIS TEVE VIDA ZERADA (ou ainda pior)!`);
        console.log(`\nGAME OVER!`);
        setTimeout(() => process.exit(), 2000);
      } else if (nome === "Jerry") {
        // Se o personagem é Jerry, exibe uma mensagem
        console.log(`\nJERRY FOI NOCAUTEADO POIS TEVE VIDA ZERADA (ou ainda pior)!`);
      }

      // Mensagem indicando que Tom venceu
      console.log(`\nPARABÉNS, TOM ACABOU COM A RAÇA DE JERRY!`);

      // Encerra o processo após 2 segundos
      setTimeout(() => process.exit(), 2000);
    }
  }

  // Método para obter uma representação textual dos atributos do personagem
  getAtributos(nome) {
    return `
  ╔════════════════════════╗
  ║         ${nome}            ║
  ╚════════════════════════╝
  ╔════════════════════════╗
  ║        Vitalidade      ║
  ╠════════════════════════╣
  ║ Vida:    ${this.vida}            ║
  ║ Energia: ${this.energia}            ║
  ╚════════════════════════╝
  `;
  }
}

// Exporta a classe Personagem para que possa ser utilizada em outros módulos
module.exports = { Personagem };
