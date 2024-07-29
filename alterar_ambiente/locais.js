const { quarto } = require("../comodos/quarto"); // Importa a função `quarto` do módulo `quarto` localizado em `../comodos/quarto`
const { sala } = require("../comodos/sala"); // Importa a função `sala` do módulo `sala` localizado em `../comodos/sala`
const { cozinha } = require("../comodos/cozinha"); // Importa a função `cozinha` do módulo `cozinha` localizado em `../comodos/cozinha`
const { porao } = require("../comodos/porao"); // Importa a função `porao` do módulo `porao` localizado em `../comodos/porao`
const { sotao } = require("../comodos/sotao"); // Importa a função `sotao` do módulo `sotao` localizado em `../comodos/sotao`

// Define uma lista de locais disponíveis no jogo, cada um associado a uma função
const locaisDisponiveis = [
  { nome: "Quarto", func: quarto }, // Define o local "Quarto" e associa a função `quarto`
  { nome: "Sala", func: sala },     // Define o local "Sala" e associa a função `sala`
  { nome: "Cozinha", func: cozinha }, // Define o local "Cozinha" e associa a função `cozinha`
  { nome: "Porão", func: porao },   // Define o local "Porão" e associa a função `porao`
  { nome: "Sótão", func: sotao },   // Define o local "Sótão" e associa a função `sotao`
];

module.exports = locaisDisponiveis; // Exporta a lista de locaisDisponiveis para ser usada em outros módulos

