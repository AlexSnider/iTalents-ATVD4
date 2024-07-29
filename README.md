# iTalents - Desafio 4

## Jogo Tom e Jerry

Desafio do bootcamp back-end Node.js promovido pela iTalents. O projeto refere-se a um jogo interativo baseado na famosa série Tom e Jerry, onde o jogador controla Tom e precisa encontrar e acertar Jerry com itens encontrados em diferentes cômodos da casa para vencer o jogo, evitando ser nocauteado por armadilhas que Jerry pode colocar nos ambientes.

## Estrutura do Projeto

- `index.js`: Script JavaScript que contém a lógica de inicialização do projeto.
- `personagens/instancias.js`: Módulo que define as instâncias dos personagens Tom e Jerry.
- `itens_dos_comodos/itensArremeco.js`: Módulo que define os itens disponíveis para arremesso encontrados em diferentes cômodos.
- `itens_dos_comodos/itensArmadilha.js`: Módulo que define os itens de armadilha encontrados nos cômodos.
- `utilidades/readline.js`: Módulo para interação com o usuário via console.
- `utilidades/setTrap.js`: Módulo que contém funções para lidar com armadilhas.
- `utilidades/typeWritter.js`: Módulo para exibir texto com efeito de máquina de escrever.
- `utilidades/randomAssertions.js`: Módulo com funções para verificar eventos aleatórios, como a presença de Jerry.
- `alterar_ambiente/gerenciadorAmbientes.js`: Módulo para gerenciar a mudança de ambiente e localização dos personagens.
- `comodos/comodos...`: Módulo que contém todos os ambientes disponíveis e sua lógica.
- `intorducao/modulos...`: Módulo que contém a fase introdutória do game.

## Funcionalidades

### Menu Principal
- Exibe o menu principal com opções para:
  - Introdução do funcionamento do jogo.
  - Iniciar o jogo em um cômodo específico (porão, quarto, sala ou sótão ou cozinha).
  - Sair do jogo.

### Cômodos do Jogo
O jogo possui quatro cômodos onde a interação ocorre:
- **Porão**
- **Quarto**
- **Sala**
- **Sótão**
- **cozinha**

### Interações no Jogo

#### 1. **Porão**
- **Objetivo**: Tom tenta encontrar e acertar Jerry com um item encontrado no porão.
- **Funções**:
  - `perguntarSeJogarItem`: Pergunta ao jogador se deseja jogar o item encontrado em Jerry.
  - `porao`: Simula a interação de Tom no porão, verificando a presença de Jerry, lidando com armadilhas e aplicando o dano se Tom acertar Jerry.

### A lógica se repete em todos os cômodos, apenas divergindo em como irá acontecer nos encontros entre os personagens.

### Funções Utilitárias

#### `perguntarSeJogarItem`
- Solicita ao usuário se deseja tentar acertar Jerry com o item encontrado.
- Recebe uma callback que executa ações baseadas na resposta do usuário (sim/nao).

#### `lidarComArmadilha`
- Lida com armadilhas associadas aos itens encontrados em cada cômodo.

#### `typeWriter`
- Exibe texto com efeito de máquina de escrever para criar uma experiência mais imersiva.

#### `checkAssertion`
- Retorna true ou false para eventos aleatórios, como a presença de Jerry no cômodo.

#### `mudarDeLocal`
- Gerencia a mudança de ambiente e a localização dos personagens.

## Como Jogar

### Executando com Node.js

1. **Instale o Node.js**:
   - [Baixe e instale o Node.js](https://nodejs.org/).

2. **Clone o repositório**:
   ```sh
   git clone https://github.com/AlexSnider/iTalents-ATVD4
   cd iTalents-ATVD4
   npm install
   node script.js || npm start

## Jogabilidade
  Iniciar o Jogo: Execute node script.js para iniciar o jogo e selecione o cômodo onde Tom vai procurar por Jerry.
  Interagir com o Jogo: Siga as instruções no console para interagir com o jogo, como jogar itens em Jerry e lidar com armadilhas.

## Minhas impressões
  O projeto foi um desafio e tanto. Pude experienciar uma nova abordagem em como relacionar objetos para que todos
  os itens e personagens pudessem interagir entre si. A ideia, por incrível que pareça, surgiu enquanto eu estava escovando
  os dentes :D
  Tenho orgulho do que construí, agradeço pelo aprendizado fornecido pela #iTalents e seguirei a todo vapor em minha constante melhora como desenvolvedor!


## Licença
Esse projeto está sob lincença [MIT](https://github.com/AlexSnider/iTalents-ATVD4/blob/main/LICENSE).
