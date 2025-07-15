# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Unreleased]
- Planejar expansão do components `CardItem` para incluir mais detalhes e interatividade

## [0.1.0] - 12/07/2025
### Added
- Estrutura base do projeto criada em `public/assets` com `index.html` e `css/styles.css`.
- Layout inicial do `<header>` responsivo com imagens e ícones SVG.
- Conteúdo construído com HTML e CSS puro, sem JavaScript.

## [0.2.0] - 14/07/2025
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