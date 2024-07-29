// Importa as classes PersonagemTom e PersonagemJerry dos módulos especificados
const { PersonagemTom } = require("./personagemTom");
const { PersonagemJerry } = require("./personagemJerry");

// Cria instâncias das classes PersonagemTom e PersonagemJerry
const tom = new PersonagemTom();
const jerry = new PersonagemJerry();

// Exporta as instâncias criadas para que possam ser utilizadas em outros módulos
module.exports = { tom, jerry };
