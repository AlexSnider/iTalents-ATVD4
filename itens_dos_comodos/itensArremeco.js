// Define os itens e danos disponíveis em diferentes ambientes
const sala = [
  { item: "almofada", dano: 35 },
  { item: "controle remoto", dano: 30 },
  { item: "revista", dano: 30 },
];

const cozinha = [
  { item: "prato", dano: 30 },
  { item: "colher", dano: 35 },
  { item: "fruta", dano: 30 },
];

const quarto = [
  { item: "travesseiro", dano: 30 },
  { item: "livro", dano: 30 },
  { item: "sapato", dano: 35 },
];

const porao = [
  { item: "bola de tênis", dano: 35 },
  { item: "ferramenta pequena", dano: 30 },
  { item: "lata vazia", dano: 30 },
];

const sotao = [
  { item: "boneco antigo", dano: 30 },
  { item: "caixa de metal", dano: 35 },
  { item: "livro velho grosso", dano: 30 },
];

// Função para obter um item aleatório de um array
function getRandomItem(array) {
  // Gera um índice aleatório dentro dos limites do array
  const randomIndex = Math.floor(Math.random() * array.length);
  // Retorna o item no índice aleatório
  return array[randomIndex];
}

// Função para aumentar o dano de todos os itens em um ambiente
function aumentarDanoItens(ambiente) {
  // Itera sobre cada item do ambiente e aumenta o dano em 25
  ambiente.forEach((item) => {
    item.dano += 25;
  });
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

// Obtém um item aleatório de cada ambiente e armazena em variáveis
const salaItem = getRandomSalaItem();
const cozinhaItem = getRandomCozinhaItem();
const quartoItem = getRandomQuartoItem();
const poraoItem = getRandomPorãoItem();
const sotaoItem = getRandomSotãoItem();

// Exporta os itens aleatórios e as funções para serem usados em outros módulos
module.exports = {
  salaItem,
  cozinhaItem,
  quartoItem,
  poraoItem,
  sotaoItem,

  sala,
  cozinha,
  quarto,
  porao,
  sotao,

  aumentarDanoItens,
};
