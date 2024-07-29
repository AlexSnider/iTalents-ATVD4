const { tom } = require("../personagens/instancias"); // Importa o objeto `tom` do módulo `instancias` localizado em `../personagens/instancias`
const { typeWriter } = require("../utilidades/typeWritter"); // Importa a função `typeWriter` do módulo `typeWritter` localizado em `../utilidades/typeWritter`

function mudarDeAmbiente(nomeAmbiente, ambienteFunc) {
  console.clear(); // Limpa o console para uma nova exibição
  typeWriter(`\nEntrando no(a) ${nomeAmbiente}...`, 15); // Exibe uma mensagem com efeito de digitação informando a entrada no ambiente especificado
  console.clear(); // Limpa o console novamente após a mensagem
  setTimeout(() => {
    console.log(`\nTom perdeu 15 de energia para mudar de ambiente (caso ainda tenha alguma)!`); // Mensagem informando a perda de energia de Tom

    const qtdEnergia = 15; // Define a quantidade de energia perdida para a mudança de ambiente

    tom.mudarAmbiente("Tom", qtdEnergia); // Chama a função `mudarAmbiente` no objeto `tom`, passando o nome "Tom" e a quantidade de energia a ser descontada

    console.log(tom.getAtributos("Tom")); // Exibe os atributos atuais de Tom, incluindo sua energia restante

    setTimeout(() => {
      ambienteFunc(); // Após um atraso de 3 segundos, chama a função `ambienteFunc`, que representa a função do cômodo para o qual Tom está se mudando
    }, 3000); // Atraso de 3 segundos
  }, 4000); // Atraso inicial de 4 segundos
}

module.exports = { mudarDeAmbiente }; // Exporta a função `mudarDeAmbiente` para ser usada em outros módulos
