# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Unreleased]
- Concluido: Refatorar o services/filmesService.js -> Inclui o Helper ();
- Próximo: Implementar opão de pesquisa por filme;

## [0.1.0] - 12/07/2025
### Added
- Estrutura base do projeto criada em `public/assets` com `index.html` e `css/styles.css`.
- Layout inicial do `<header>` responsivo com imagens e ícones SVG.
- Conteúdo construído com HTML e CSS puro, sem JavaScript.

## [0.2.0] - 12/07/2025
### Added
- Criada a `section` principal da página `explore` (index.html) contendo:
  - Header com título `<h1>` e campo de busca `<input>` (pesquisar filmes).
  - Corpo da section com lista `<ul>` para exibir os cards de filmes.

## [0.3.0] - 13/07/2025
### Added
- Inclusão da pasta `/src` com `/components` e `main.js`.
- Componentes `Header.js` e `CardItem.js` criados para renderização dinâmica via JavaScript.
- Ícones SVG centralizados em `assets/icons/icons.js`.

## [0.4.0] - 15/07/2025
### Added
- Componente `SectionFilmes.js` criado para renderização da section que contém a lista de filmes.
  - O header está fixo nesse componente, mas com título dinâmico (preenchido no `main.js`).
  - Estrutura sob análise para possível alteração futura.
- Removida a marcação da section no `index.html`, agora possui apenas o `<main class="app">`.

## [0.5.0] - 18/07/2025
### Added
- Estrutura base de roteamento com hash e renderização da página Home.
- Criada a pasta `/pages` e o componente inicial `Home.js`.
- Componentes passaram a criar e retornar elementos DOM ao invés de strings HTML.
  - Antes: componentes retornavam strings com HTML (direto no `return`).
  - Agora: componentes criam e retornam elementos DOM (`createElement` com `innerHTML`).

## [0.6.0] - 18/07/2025
### Added
- Estrutura `base` de integração com a API no componente `SectionFilmes` (Home).
  - Antes: Os filmes eram definidos em um array local estático (array).
  - Agora: Os filmes são obtidos da API através do serviço `getFilmes()`.
- Expandi serviço base `filmeService.js` com funções para consumo da API de filmes (Payload estático).
  - `fetchAllFilmes`: busca todos os filmes cadastrados.
  - `fetchFilmeById`: retorna detalhes de um filme via ID.
  - `fetchFilmesByUser`: retorna lista de filmes associados ao usuário autenticado.
  - `createNewFilme`: envia requisição POST para cadastrar um novo filme com dados simulados.
  - `toggleFilmeFavorite`: envia requisição POST para favoritar ou desfavoritar um filme.

### Changed
- Refatora chamadas à API criando helper genérico `requestApi` para centralizar fetch, headers e tratamento básico.