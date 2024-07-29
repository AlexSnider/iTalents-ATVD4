// Importa a classe Personagem do módulo personagem
const { Personagem } = require("./personagem");

// Define a classe PersonagemJerry que herda de Personagem
class PersonagemJerry extends Personagem {
  // Construtor da classe PersonagemJerry
  constructor(vida = 99, energia = 99) {
    // Chama o construtor da classe pai (Personagem) para inicializar vida e energia
    super(vida, energia);
  }

  // Método para colocar uma armadilha que causa dano a Tom
  colocarArmadilha(tom, ambiente, dano) {
    // Verifica se o ambiente é especificado (não é null ou undefined)
    if (ambiente) {
      // Reduz a vida de Tom pelo valor do dano
      tom.vida -= dano;
    }
  }
}

// Exporta a classe PersonagemJerry para que possa ser utilizada em outros módulos
module.exports = { PersonagemJerry };
