// Importa a classe Personagem do módulo personagem
const { Personagem } = require("./personagem");

// Define a classe PersonagemTom que herda de Personagem
class PersonagemTom extends Personagem {
  // Construtor da classe PersonagemTom
  constructor(vida = 99, energia = 99) {
    // Chama o construtor da classe pai (Personagem) para inicializar vida e energia
    super(vida, energia);
  }

  // Método para jogar um item que causa dano a Jerry
  jogarItem(jerry, ambiente, dano) {
    // Verifica se o ambiente é especificado (não é null ou undefined)
    if (ambiente) {
      // Reduz a vida de Jerry pelo valor do dano
      jerry.vida -= dano;
    }
  }
}

// Exporta a classe PersonagemTom para que possa ser utilizada em outros módulos
module.exports = { PersonagemTom };
