// Define os itens e danos disponíveis em diferentes ambientes
const sala = [
  { item: "pé de cabra", dano: 25 },
  { item: "tachinhas", dano: 25 },
  { item: "caco de vidro", dano: 25 }
];

const cozinha = [
  { item: "prato quebrado", dano: 25 },
  { item: "fio de energia solto", dano: 25 },
  { item: "maionese melecosa", dano: 25 }
];

const quarto = [
  { item: "carrinho de controle remoto", dano: 25 },
  { item: "linha de pipa embaraçada", dano: 25 },
  { item: "sapato com espinho", dano: 25 }
];

const porao = [
  { item: "bolinhas de gude", dano: 25 },
  { item: "prateleira pensa", dano: 25 },
  { item: "graxa colante", dano: 25 }
];

const sotao = [
  { item: "caixa cheia de pó", dano: 25 },
  { item: "luzes de natal ultra piscantes", dano: 25 },
  { item: "cola velha", dano: 25 }
];

// Função para obter um item aleatório de um array
function getRandomItem(array) {
  // Gera um índice aleatório dentro dos limites do array
  const randomIndex = Math.floor(Math.random() * array.length);
  // Retorna o item no índice aleatório
  return array[randomIndex];
}

// Funções para obter um item aleatório de cada ambiente
function getRandomSalaItem() {
  return getRandomItem(sala);
}

function getRandomCozinhaItem() {
  return getRandomItem(cozinha);
}

function getRandomQuartoItem() {
  return getRandomItem(quarto);
}

function getRandomPorãoItem() {
  return getRandomItem(porao);
}

function getRandomSotãoItem() {
  return getRandomItem(sotao);
}

// Obtém um item aleatório para cada ambiente e armazena em variáveis
const salaItemArmadilha = getRandomSalaItem();
const cozinhaItemArmadilha = getRandomCozinhaItem();
const quartoItemArmadilha = getRandomQuartoItem();
const poraoItemArmadilha = getRandomPorãoItem();
const sotaoItemArmadilha = getRandomSotãoItem();

// Exporta os itens de armadilha para que possam ser usados em outros módulos
module.exports = {
  salaItemArmadilha,
  cozinhaItemArmadilha,
  quartoItemArmadilha,
  poraoItemArmadilha,
  sotaoItemArmadilha,
};
