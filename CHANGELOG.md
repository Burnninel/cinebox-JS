# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Unreleased]
### Changed
- Pagina de filme não encontrado implementada.
- Implementada estrutura basica para pagina de autenticação com login e registrar.
- Interavitidade (toggle de forms) da pagina de autenticação.
- Envia a requisição de autenticação para a API.
- Retorna erros de validação da API no front.

### Added
- Adicionar mensagens de sucesso na autenticação usando bootstrap.

## [0.3.6] - 27/07/2025

### Changed
- Refatoração da função `handleAuthForm` no `AuthHandler` para melhorar o gerenciamento de erros:
  - `removeErrors` agora recebe `authContainer` para buscar inputs dentro do escopo correto.
  - Ajustes nas funções de exibição e limpeza de erros para manter o encapsulamento.
- Separação mais clara das responsabilidades entre `AuthLayout` (interface) e `AuthHandler` (lógica e manipulação de eventos).
- Refatoração na função `Auth` para melhoria dos nomes de variáveis:
  - `fragment` renomeado para `authFragment` para maior clareza.
  - `sectionForm` renomeado para `authSection` para refletir melhor o conteúdo.
  - Nenhuma alteração funcional, apenas melhorias semânticas para facilitar manutenção e leitura.

## [0.3.5] - 27/07/2025

### Added
- Exibição de mensagens de erro nos campos inválidos do formulário de login/cadastro.
- Limpeza automática dos erros ao tentar novo envio.

### Changed
- Função `setupAuth` agora lida com respostas de erro e invoca renderização das mensagens.
- Lógica de remoção do cookie antigo (`token`) antes de adicionar um novo.

### CSS
- Adicionado feedback visual com borda vermelha (input) e texto auxiliar (span) nos inputs com erro.

## [0.3.4] - 26/07/2025

### Added
- Criada função `setupAuth` para lidar com a captura e envio de dados dos inputs de autenticação.
- Implementado armazenamento do token de autenticação em cookie com tempo de expiração de 1 dia (Estrutura inicial).
- Adicionada lógica para remoção do cookie anterior antes de salvar um novo token.
- Criado `loginService` para centralizar a requisição de autenticação via (helper) `apiRequest`.

### Changed
- Atualizado componente `AuthLayout` para receber os formulários de login e cadastro de forma dinâmica via objeto `forms`.
- Inputs dos formulários agora são renderizados com base em uma lista de configuração, facilitando manutenção e expansão futura.

## [0.3.4] - 24/07/2025

### Added
- Refatorado o componente `AuthLayout` para aceitar configuração dinâmica dos formulários.

## [0.3.3] - 24/07/2025

### Added
- Refatorado o componente `AuthLayout` para aceitar configuração dinâmica dos formulários.
- Implementada alternância entre os formulários de login e cadastro via botão toggle.
- Adicionados identificadores únicos nos inputs de cada formulário.
- Atualizado `Auth.js` para passar os dados de formulários via props para `AuthLayout`.
- Ajustes simples no css dos botões com inclusão do hover.

## [0.3.2] - 24/07/2025

### Added
- Responsividade na tela de autenticação.
- Ajuste do tamanho e largura do banner e formulário para telas até 1280px.
- Ocultação do banner e exibição do logo pequeno em telas até 768px.
- Ajustes no tamanho de botões, inputs e margens para melhor usabilidade em telas pequenas.

## [0.3.1] - 23/07/2025

### Added
- Inclusão da estrtura base do formulario do layout de autenticação.
- Adição do toggle visual para alternar entre Login e Cadastro (botões estilizados, sem funcionalidade ainda).
- Estilos CSS para `.auth-form`, `.auth-toggle`, inputs e botões, garantindo alinhamento, espaçamento e visual consistente com o banner lateral.

## [0.3.0] - 21/07/2025

### Added
- Página de autenticação básica (`pages/Auth`) com estrutura de layout dividida.
- Componente visual `AuthLayout` criado em `components/Form`.
- Estrutura visual do banner lateral com imagem, logo e texto descritivo.
- Classes de estilo iniciais para `.auth-banner`, com foco em responsividade, alinhamento e visual agradável.


## [0.2.0] - 20/07/2025
### Added
- Ferramenta Vite adicionada como bundler e dev server para o projeto Cinebox.
- Script de inicialização com Vite configurado no `package.json`.
- Organização dos arquivos em `src/assets`, incluindo CSS, imagens e ícones.

### Changed
- Estrutura do projeto ajustada para seguir padrão Vite:
  - `index.html` movido para a raiz do projeto.
  - Imports de CSS passa para o arquivo `main.js` (antes era no index.html).
- Substituição do uso do Live Server pelo servidor do Vite.

### Removed
- Pasta `public` removida do projeto, com seus arquivos migrados para `src/assets`.

### Purpose
- Executar o servidor local com Vite e permitir rotas sem hash (`#`), facilitando a navegação limpa e moderna no navegador.


## [0.1.2] - 19/07/2025
### Added
- Componente `EmptyMovieMessage` para exibir mensagem quando a pesquisa não retorna filmes.
 - Estilização do componente `EmptyMovieMessage` adicionada em `css/section`.
- Validação implementada no `MovieSection` para mostrar `EmptyMovieMessage` caso não haja resultados na pesquisa.

## [0.1.1] - 19/07/2025
### Added
- Implementa opção de pesquisa de filmes.
  - Adaptação do `movieService` para aceitar termo de busca como parâmetro.
  - Ajusta o `MovieSection` para capturar os dados do input e enviar para o `movieService`.

## [0.1.0] - 18/07/2025
### Added
- Integração base com API no componente `SectionFilmes` (Home).
  - Os filmes, antes estáticos em array local, agora são obtidos via API.
- Expansão do serviço `filmeService.js` com funções para consumo da API de filmes:
  - `fetchAllFilmes`: busca todos os filmes cadastrados.
  - `fetchFilmeById`: retorna detalhes de um filme via ID.
  - `fetchFilmesByUser`: lista filmes associados ao usuário autenticado.
  - `createNewFilme`: requisição POST para cadastrar filme com payload simulado.
  - `toggleFilmeFavorite`: requisição POST para favoritar/desfavoritar filme.

### Changed
- Refatoração das chamadas à API para uso do helper genérico `requestApi`.

## [0.0.5] - 18/07/2025
### Added
- Estrutura base de roteamento com hash e renderização da página Home.
- Pasta `/pages` criada com componente inicial `Home.js`.
- Componentes passaram a criar e retornar elementos DOM (usando `createElement` e `innerHTML`) em vez de strings HTML.

## [0.0.4] - 15/07/2025
### Added
- Componente `SectionFilmes.js` criado para renderizar a section com a lista de filmes.
  - Header fixo com título dinâmico (definido no `main.js`).
- Remoção da marcação da section no `index.html`, que agora contém apenas `<main class="app">`.

## [0.0.3] - 13/07/2025
### Added
- Inclusão da pasta `/src` com `/components` e `main.js`.
- Criação dos componentes `Header.js` e `CardItem.js` para renderização dinâmica via JavaScript.
- Centralização dos ícones SVG em `assets/icons/icons.js`.

## [0.0.2] - 12/07/2025
### Added
- Criação da section principal da página `explore` (`index.html`):
  - Header com título `<h1>` e campo de busca `<input>` para pesquisar filmes.
  - Corpo da section com lista `<ul>` para exibir cards de filmes.

## [0.0.1] - 12/07/2025
### Added
- Estrutura base do projeto criada em `public/assets` com `index.html` e `css/styles.css`.
- Layout inicial do `<header>` responsivo com imagens e ícones SVG.
- Conteúdo construído com HTML e CSS puro, sem JavaScript.
