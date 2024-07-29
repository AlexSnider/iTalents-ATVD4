// Função para verificar se há pelo menos um par de números iguais em duas listas de números aleatórios
function checkAssertion() {
  
  // Função interna para gerar um número aleatório entre 1 e 30
  function generateRandomNumber() {
    return Math.floor(Math.random() * 30) + 1;
  }

  // Inicialização de dois arrays vazios para armazenar números aleatórios
  const arr1 = [];
  const arr2 = [];

  // Loop para preencher os dois arrays com 30 números aleatórios cada
  for (let i = 0; i < 30; i++) {
    arr1.push(generateRandomNumber());
    arr2.push(generateRandomNumber());
  }

  // Loop para comparar os números nos arrays posição por posição
  for (let i = 0; i < 30; i++) {
    // Se encontrar números iguais na mesma posição, retorna true
    if (arr1[i] === arr2[i]) {
      return true;
    }
  }

  // Se não encontrar números iguais na mesma posição, retorna false
  return false;
}

// Exporta a função checkAssertion para que possa ser utilizada em outros módulos
module.exports = { checkAssertion };
