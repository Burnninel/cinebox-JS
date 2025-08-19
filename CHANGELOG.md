# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Unreleased]
### Added
- Cria a pagina meus filmes.
- Implementar botão de criar filme no `MovieSection`.
- Ajustar redirecionamentos (Explorar e Meus-Filmes) do header.
- Cria pagina de cadastro do filme.

### Next feature
- Criar validação da pagina de cadastro do filme.

### Pending / Roadmap (Backend)
- Consultar dados do usuário via token.
- Verificar validade do token.
- Pesquisar filme por usuario.

## [0.7.10] - 19/08/2025 - **Refatoração do AddMovie**

### Changed
- Inputs encapsulados em `div.form__group` para preservar layout, gap e posicionamento CSS, garantindo renderização correta dos erros de validação.

### Refactor
- Criação das funções:
  - `createInputGroup`: abstrai a criação de cada input com ícone e atributos, isolando responsabilidade.
  - `renderFormInputs`: gera dinamicamente inputs completos e metade-metade (half fields), centralizando lógica de layout de formulário.
  - `createUpload` e `createTextArea`: mantidas para modularidade e separação de responsabilidades.
- Formulário reorganizado para maior reutilização e manutenção: inputs e campos de meio layout tratados de forma dinâmica.
- Integração com `handleAddMovie` preservada para submissão e eventos do formulário.

## [0.7.9] - 18/08/2025 - **Refatoração do `EmptyMovieMessage`**

### Changed
- Substituição de `innerHTML` por criação estruturada via `createElement` e `htmlToElement`.
- Estrutura do layout agora montada com elementos e filhos explícitos, em vez de concatenação de strings.

### CSS
- Estilos do componente movidos de `css/movie/movieSection.css` para `css/movie/emptyMovieMessage.css`.
- Import do novo CSS adicionado em `css/styles.css`.

## [0.7.8] - 17/08/2025 - **Refatoração dos components `/common` usando `createElement`**

### Changed
- Refatorado `Header` para substituir `innerHTML` por `createElement` e `htmlToElement`:
  - Configuração de botões movida para `buttonsConfig`.
  - Função `createButton` criada para gerar botões dinamicamente.
  - Lógica de navegação e ativação de botões isolada em `setupHeaderNavigation`.
  - Mantida semântica e funcionalidades originais.
- Refatorado `Loading`:
  - Substituído `innerHTML` por `createElement` para criar a estrutura do overlay e spinner.
  - Funções `showLoading` e `hideLoading` mantidas para controle da visibilidade.
- Refatorado `ToastContainer`:
  - Substituído `innerHTML` por `createElement` para criar o container e toasts.
  - `createToastElement` recebe objeto `{ message, type }` e retorna o elemento do toast.
  - Lógica de exibição e remoção do toast via Bootstrap mantida.
- refatorado `Input`, removendo a variável e usando diretamente o `return`.

## [0.7.7] - 16/08/2025 - **Refatoração do `AuthLayout`**

### Added
- Funções `createAuthBanner` e `createToggleButtons` criadas para separar a lógica de construção do layout.
- Função `renderInputs` adicionada para gerar inputs dinamicamente a partir do objeto `forms`.
- Toggle buttons agora usam `<nav>` para melhorar semântica e acessibilidade.
- Novos ícones adicionados para utilização no formulário:
  - `IconMail`
  - `IconUser`
  - `IconPassword`

### Changed
- Substituição de HTML via template strings (`innerHTML`) por elementos DOM usando `createElement` e `htmlToElement`.
- Uso do componente `Input()` para encapsular inputs com ícones.
- Pages `Login` e `Signup` atualizadas para importar e renderizar os ícones nos inputs.
- No `AuthHandler`, inputs agora utilizam o wrapper `.form__field` para setagem e remoção de erros.
- Funções `removeInputErrorMessage` e `showFieldError` atualizadas para manipular o wrapper, garantindo consistência visual.

## [0.7.6] - 15/08/2025 - **Refatoração do component `MovieCard`**

### Changed
- Refatorado `MovieCard` para utilizar `createElement` e `htmlToElement` em vez de `innerHTML`.
- Extraído o bloco de avaliação (`rating`) para função auxiliar `createRating`, tornando o componente mais limpo e legível.
- Mantida a estrutura e funcionalidades originais.

## [0.7.5] - 15/08/2025 - **Refatoração do component `MovieSection`**

### Changed
- Substituído `innerHTML` por components `createElement` + `htmlToElement` para criar elementos dinamicamente.
- Criadas funções auxiliares:
  - `createSearchInput()` para a barra de pesquisa.
  - `createAddButton()` para o botão "Novo" na página `/meus-filmes`.
- Reduzida duplicação de código no `header` e melhorada a modularidade.
- Evitado uso de IDs duplicados, usando seletores mais específicos para inputs e botões.
- Listener do botão “Novo” mantido apenas para a página `/meus-filmes`.
- Lógica de busca reorganizada:
  - Substituído `replaceChildren` para limpar a lista antes de renderizar.
  - Definido `display: flex` ou `none` dependendo se há resultados.
  - Inserção condicional de mensagem vazia (`EmptyMovieMessage`) quando não há resultados.

## [0.7.4] - 15/08/2025 - **Criação do component `AddMovie` e novos ícones**

### Added
- Component `AddMovie` para criar formulário de cadastro de filmes, incluindo:
  - Upload de imagem (`IconUpload`).
  - Campos de input reutilizando o component `Input` (`Título`, `Diretor`, `Ano`, `Categoria`).
  - Área para sinopse (`textarea`).
  - Botões de ação `Cancelar` e `Salvar`.
- Novos ícones adicionados para utilização no formulário:
  - `IconUpload`
  - `IconTicket`
  - `IconCalendar`

## CSS
- CSS associado para estilização completa do formulário (`movie-form` e suas classes filhas).
- Layout responsivo, mantendo proporção entre upload e formulário em telas menores.
- Alterado `.global-header` para **header fixo** no topo da página:
  - `position: fixed; top: 0; left: 0; right: 0; z-index: 1000;`
  - Fundo definido como `var(--gray-700)` para contraste com o conteúdo.
  - Aumentada a `min-height` para 4rem, garantindo consistência visual.
- Alterado `body` para incluir `html` e `min-height: 100vh`, permitindo altura mínima de tela completa sem forçar overflow.
- Adicionado `section` com:
  - `min-height: 100vh` para garantir que cada seção ocupe toda a altura da tela.
  - `padding-top: 4rem` para compensar o header fixo.
  - `box-sizing: border-box` para cálculo consistente de padding e border.
- Criada classe `.app` com `height: 100%` e `display: flex` em coluna, permitindo layout flexível e alinhamento vertical do conteúdo.

## [0.7.3] - 15/08/2025

### Added
- Função `htmlToElement` para converter strings HTML em elementos DOM.
- Criado para **facilitar a inserção de SVGs ou trechos HTML dinâmicos** em componentes, garantindo reutilização e padronização.

### Fixed
- Renomeado o parâmetro `atributtes` para `attributes` no component `Input`.

## [0.7.2] - 14/08/2025 - **Criação do component `Input` e estilização CSS**

### Added
- Component `Input` para criar campos de formulário com ícone integrado de forma padronizada e reutilizável.
- Suporte a parâmetros:
  - `icon`: SVG ou elemento HTML para ser exibido ao lado do input.
  - `atributtes`: objeto com atributos a serem aplicados no `<input>` (id, placeholder, type, etc.).
- Estrutura flexível, permitindo inputs full-width ou agrupados lado a lado (`form-box__input`).
- CSS associado para estilização:
  - `.form__field`: container flexível, altura padronizada, borda e radius.
  - `.form__input-icon`: área do ícone com altura 100% e alinhamento central.
  - `.form__input`: input com altura total do container, sem borda, fundo transparente e cor padrão.
  - `.form-box__input`: suporte para inputs lado a lado com espaçamento consistente.
- Criado para **organizar, padronizar e facilitar a reutilização** de campos de formulário em toda a aplicação.

## [0.7.1] - 14/08/2025 - **Criação do helper `createElement` para manipulação de DOM**

### Added
- Função utilitária `createElement` para criar elementos HTML dinâmico de forma padronizada e simplificada.
- Suporte aos seguintes parâmetros:
  - `tag`: Tipo de elemento a ser criado (`div`, `span`, etc.).
  - `className`: Classes CSS aplicadas ao elemento.
  - `textContent`: Texto interno do elemento.
  - `innerHTML`: Conteúdo HTML interno do elemento.
  - `attributes`: Objeto com pares chave/valor para definir atributos personalizados (`id`, `type`, `placeholder`, etc.).
  - `children`: Lista de elementos filhos para serem anexados.
- Criado para tornar o código mais **organizado, estruturável e reaproveitável**, evitando múltiplas chamadas diretas a `document.createElement` espalhadas pelo projeto.

## [0.7.0] - 09/08/2025 -  **Implementa estrtura base da rota "`/filme/novo`"**

### Added
- Page `NewMovie` para cadastro de filmes.
- Componente `AddMovie` com estrutura base.
- Rota `/filme/novo` adicionada ao `router` com proteção para usuários autenticados.

## [0.6.4] - 08/08/2025 - **Ativação dinâmica do botão ativo no Header**

### Added
- Função `setActiveButton` criada para gerenciar a classe `global-header__btn--active` conforme rota atual.
- Atualização da classe ativa após navegação via clique nos botões do header.
- Limpeza da classe ativa antes de aplicar ao botão correto.

### CSS
- Estilização CSS aprimorada para `.global-header__btn--active` e seus SVGs (`svg path`) para melhor destaque visual.

## [0.6.3] - 08/08/2025 - **Proteção de Rotas Privadas e Uso do Loading no Carregamento**

### Added
- Suporte a metadado `private` nas rotas para exigir autenticação.
- Redirecionamento automático para `/login` quando o usuário acessa rotas privadas sem token.

### Changed
- `router` agora utiliza `async/await` para carregar páginas de forma assíncrona.
- Envolvimento do carregamento das páginas em `try/catch/finally` com uso do componente `Loading`.

## [0.6.2] - 07/08/2025 - **Redirecionamento automático e navegação no header**

### Changed
- No `router`, adicionada verificação para redirecionar da rota raiz `/` para `/explorar` usando `history.replaceState`.
- No componente `Header`, botões do menu (Explorar, Meus Filmes e Entrar) agora usam `navigateTo` para navegação SPA sem reload.
- Botões do header recebem atributo `data-form` para definir a rota dinamicamente.
- Código do header simplificado para adicionar eventos de clique em lote, melhorando a manutenção.

## [0.6.1] - 07/08/2025 - **Reorganização da estrutura de CSS**

### Changed
- Estrutura de pastas do `css/` reorganizada para melhor separação e manutenção alinhada aos components.
- Criadas as pastas:
  - `css/base/` estilos gerais do projeto (`base`, `colors`).
  - `css/common/` estilização para componentes reutilizáveis (`toast`, `loading`, `header`).
  - `css/auth/` estilização do componente de autenticação (`auth`).
  - `css/movies/` estilização do componentes de filmes (`movieCard`, `movieSection`).
    - Antes era um único arquivo `section`.
  - Arquivos `styles.css` e `bootstrap-custom.scss` mantidos na raiz da pasta `/css/`.
- Ajustes nos imports de CSS para uso de caminhos absolutos e refletindo a nova estrutura de pastas.

## [0.6.0] - 07/08/2025 - **Reorganização da estrutura de componentes**

### Changed
- Estrutura de pastas de `components/` reorganizada para melhorar a manutenção e escalabilidade do projeto.
- Criadas as pastas:
  - `components/common/` para componentes reutilizáveis (`ToastContainer`, `Loading`, `Header`).
  - `components/auth/` para componentes relacionados à autenticação (`AuthHandler`, `AuthLayout`).
  - `components/movies/` para componentes relacionados a filmes (`MovieCard`, `MovieSection`, `EmptyMovieMessage`).
- Ajustados todos os imports para refletir a nova organização de pastas.

## [0.5.3] - 07/08/2025

### Changed
- O componente `AuthHandler.js` foi ajustado para redirecionar o usuário autenticado para `/meus-filmes` após o login, em vez de redirecionar para `/`.
- Todos os imports do projeto foram padronizados para utilizar caminhos absolutos a partir da raiz `/src`.

## [0.5.2] - 06/08/2025

### Added
- Botão "`Novo`" para adicionar filme, exibido apenas na rota `/meus-filmes`.
- Ícone `IconCreate` incluído no botão de adicionar filme.
- Responsividade da área de ações (`explore__actions`) com ajuste de layout via CSS.

### Changed
- Refatoração do componente `MovieSection` para aceitar renderização condicional baseada na rota atual.
- Organização da seção de header para melhor suporte a múltiplas ações (busca + criação).

## [0.5.1] - 03/08/2025 
*Inclui token dinâmico buscando do cookie no frontend*

### Added
- Extração dinâmica do token de autenticação do cookie no frontend para uso nas requisições.
- Criação do helper `cookieHelpers.js` com função `getCookieValue` para extrair valores de cookies.

### Changed
- Refatoração do helper `apiRequest` para aceitar token como parâmetro dinâmico.
- Headers agora são montados dinamicamente com ou sem token.
- `apiRequest` ajustado para não enviar body em requisições GET.
- MyMovies agora utiliza token extraído dos cookies.

## [0.5.0] - 03/08/2025 - **Implementa página "`MyMovies`"**

### Added
- Página `MyMovies` criada em `pages/` com listagem dos filmes do usuário autenticado.
- Integração do `MyMovies` com o service `fetchMoviesByUser` para carregar dados diretamente da API.
- Suporte a listagem dinâmica reutilizando o componente `MovieSection`.

### Changed
- `MovieSection` agora recebe os filmes por parâmetro ao invés de buscar diretamente via `fetchAllMovies`, tornando-o reutilizável com diferentes fontes de dados.
- Página `Home` atualizada para realizar a chamada de API (`fetchAllMovies`) diretamente e passar os dados para o `MovieSection`.


## [0.4.1] - 02/08/2025

### Added
- Função `validateSignup` adicionada ao `authService` para aplicar regras específicas do formulário de cadastro (`signup`).
- Suporte às novas regras de validação no módulo `validateForm`: `minLength`, `maxLength`, `strong` (caracteres especiais) e `confirmed` (campos com confirmação).
- Helper `setErrorOnce` criado em `helpers/` para registrar apenas a primeira mensagem de erro por campo.

### Changed
- `validateForm` ajustado para aplicar múltiplas regras por campo e evitar sobrescrita de erros.
- `AuthHandler` atualizado para utilizar `validateSignup` ao lidar com o formulário de cadastro (`signup`).
- `AuthLayout` atualizado para enviar o `formType` ao `AuthHandler`.
- Mensagens de erro padronizadas com textos mais diretos e claros.

## [0.4.0] - 02/08/2025 - **Implementa validação do frontend (Utils)**

### Added
- Módulo `validateForm` criado em `utils/` para centralizar regras de validação no frontend.
- Função `validateLogin` implementada no `authService` para definir regras específicas do formulário de login.
- Validação de campos no formulário de login antes de enviar dados para a API, reduzindo chamadas desnecessárias.

### Changed
- `authService.js` renomeou a função `login` para `handleAuthRequest`, tornando-a mais genérica para login e cadastro.
- `AuthHandler` atualizado para utilizar a validação no client-side antes da submissão.
- Estrutura do componente `AuthHandler` reorganizada para remover e exibir erros dinamicamente com base nas validações **`frontend`**.


## [0.3.9] - 02/08/2025

### Added
- Página `Signup` criada com formulário de cadastro independente.
- Rota `/signup` adicionada no roteador para exibir a nova tela.
- Redirecionamento automático para `/login` após cadastro concluído.
- Botão para alternar entre login e cadastro agora redireciona entre rotas.
- Estrutura de componentes atualizada para refletir a separação de contextos (login vs. cadastro).

### Changed
- `Auth.js` foi renomeado para `Login.js` para refletir melhor sua responsabilidade.
- `AuthLayout` ajustado para trabalhar com um único formulário por vez, com base no `formType` fornecida.
- Lógica de alternância interna de formulário removida (foi substituída por navegação entre rotas).

### Removed
- Alternância dinâmica entre formulários de login e cadastro dentro da mesma página.

## [0.3.8] - 01/08/2025

### Added
- Componente `Loading` com overlay e spinner do Bootstrap.
- Funções `showLoading` e `hideLoading` para controlar a exibição do carregamento.
- Redirecionamento automático com `navigateTo('/')` ao finalizar o login com sucesso.
- Delay de 1 segundo antes da navegação para garantir o armazenamento do token nos cookies e troca suave.

### Changed
- Fluxo de autenticação (`handleAuthForm`): agora exibe o loading ao enviar os dados e o oculta após a resposta da API.
- Adicionado uso de `finally` para garantir que o loading seja ocultado mesmo em caso de erro.
- A navegação agora é feita via SPA (sem recarregar a página), melhorando a fluidez da experiência do usuário.

## [0.3.7] - 01/08/2025 - **Adiciona Bootstrap ao projeto**

### Added
- Sistema de **toasts personalizados** com suporte a diferentes tipos (`success`, `error`) e botão de fechamento.
- Remoção automática do toast após transição de desaparecimento (`transitionend`).
- Integração do `ToastContainer` ao `AuthHandler.js`.
- Exibição de toast de sucesso ao login bem-sucedido.
- Exibição de toast de erro ao ocorrer falha na autenticação.

### CSS
- Estilização dos toasts com fundo colorido por tipo (`.toast--success`, `.toast--error`).
- Estilo responsivo e compacto com tamanho máximo (`max-width`) e alinhamento de conteúdo interno (`toast__body`, `toast__message`).
- Transição suave de opacidade entre os estados `.fade`, `.fade.show` e `.fade:not(.show)`.

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

## [0.3.0] - 21/07/2025 - **Implementa estrutura de autenticação**

### Added
- Página de autenticação básica (`pages/Auth`) com estrutura de layout dividida.
- Componente visual `AuthLayout` criado em `components/Form`.
- Estrutura visual do banner lateral com imagem, logo e texto descritivo.
- Classes de estilo iniciais para `.auth-banner`, com foco em responsividade, alinhamento e visual agradável.


## [0.2.0] - 20/07/2025 -  **Adiciona Vite no projeto**
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


## [0.1.0] - 18/07/2025 -  **Implementa conexão com a API (Back-end)**
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

## [0.0.1] - 12/07/2025 -  **Estrutura inicial do projeto**
### Added
- Estrutura base do projeto criada em `public/assets` com `index.html` e `css/styles.css`.
- Layout inicial do `<header>` responsivo com imagens e ícones SVG.
- Conteúdo construído com HTML e CSS puro, sem JavaScript.
