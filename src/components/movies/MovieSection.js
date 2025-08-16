import { MovieCard } from "/src/components/movies/MovieCard.js";
import { EmptyMovieMessage } from "/src/components/movies/EmptyMovieMessage.js";
import { IconSearch, IconCreate } from "/src/assets/icons/icons.js";
import { fetchAllMovies } from "/src/services/movieService.js";
import { navigateTo } from "/src/router.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createSearchInput() {
  return createElement({
    tag: "div",
    className: "explore__search",
    children: [
      createElement({
        tag: "button",
        className: "explore__search-button",
        children: [htmlToElement(IconSearch())],
      }),
      createElement({
        tag: "input",
        attributes: { type: "text", placeholder: "Pesquisar filme" },
      }),
    ],
  });
}

function createAddButton() {
  return createElement({
    tag: "div",
    className: "explore__add",
    children: [
      createElement({
        tag: "button",
        className: "explore__add-button",
        children: [htmlToElement(IconCreate()), createElement({ tag: "span", textContent: "Novo" })],
      }),
    ],
  });
}

export async function MovieSection(titulo, filmes) {
	const section = createElement({ tag: "section", className: "explore" });
	const isMyMoviesPage = window.location.pathname === "/meus-filmes";

	const header = createElement({
    tag: "header",
    className: "explore-header",
    children: [
      createElement({
        tag: "div",
        children: [createElement({ tag: "h1", className: "explore__title", textContent: titulo })],
      }),
      createElement({
        tag: "div",
        className: "expore__actions",
        children: [
          createSearchInput(),
          isMyMoviesPage ? createElement({ tag: "hr", className: "explore__divider" }) : null,
          isMyMoviesPage ? createAddButton() : null,
        ],
      }),
    ],
  });

  const movieList = createElement({ tag: "ul", className: "explore__card-list" });
  section.append(header, movieList);

  filmes.forEach((movie) => movieList.appendChild(MovieCard(movie)));

  if (isMyMoviesPage) {
    section.querySelector(".explore__add-button")
      .addEventListener("click", () => navigateTo("/filme/novo"));
  }

  const [searchButton, searchInput] = section.querySelectorAll(".explore__search button, .explore__search input");

  async function search() {
    const term = searchInput.value;
    const { data: filteredMovies } = await fetchAllMovies(term);
    
    const existingEmptyMessage = section.querySelector(".no-results");
    if (existingEmptyMessage) existingEmptyMessage.remove();
   
    movieList.replaceChildren();
    movieList.style.display = filteredMovies.length ? "flex" : "none";

    if (!filteredMovies.length) section.appendChild(EmptyMovieMessage(term));
    else filteredMovies.forEach((movie) => movieList.appendChild(MovieCard(movie)));
  }

  searchButton.addEventListener("click", search);
  searchInput.addEventListener("keydown", (e) => e.key === "Enter" && search());

  return section;
}