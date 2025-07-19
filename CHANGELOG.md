# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Unreleased]
### Changed
- Refatoração do `services/filmeService.js` para incluir helper genérico `requestApi`.
- Implementa opção de pesquisa por filme no serviço `fetchAllFilmes`.
### Added
- Implementar busca de filmes utilizando os dados do campo de entrada (Interação do usuario);

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
