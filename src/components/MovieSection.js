import { MovieCard } from "./MovieCard.js";
import { EmptyMovieMessage } from "./EmptyMovieMessage.js";
import { IconSearch } from "../assets/icons/icons.js";
import { fetchAllMovies } from "/src/services/movieService.js";

export async function MovieSection(titulo) {
  const { data: filmes } = await fetchAllMovies();

  const section = document.createElement("section");
  section.className = "explore";
  section.innerHTML = `
      <header class="explore-header">
        <div class="explore__title">
            <h1>${titulo}</h1>
        </div>
        <div class="explore__search">
            <button class="explore__search-button" id="searchTerm">
                ${IconSearch()}
            </button>
          <input type="text" placeholder="Pesquisar filme" id="inputSearch" />
        </div>
      </header>
      <ul class="explore__card-list" id="movieList">
      </ul>
  `;

  const cardList = filmes.map((card) => MovieCard(card));
  const movieList = section.querySelector("#movieList");

  cardList.forEach((cardElement) => {
    movieList.appendChild(cardElement);
  });

  const searchButton = section.querySelector("#searchTerm");
  const searchInput = section.querySelector("#inputSearch");

  async function search() {
    const searchTerm = searchInput.value;
    const { data: filteredMovies } = await fetchAllMovies(searchTerm);

    const existingEmptyMessage = section.querySelector(".no-results");
    if (existingEmptyMessage) existingEmptyMessage.remove();
    movieList.replaceChildren();

    if (filteredMovies.length === 0) {
      renderEmptyMessage(section, movieList, searchTerm);
      return;
    }

    renderMovies(movieList, filteredMovies)
  }

  searchButton.addEventListener("click", search);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });

  return section;
}

function renderMovies(movieList, movies) {
  movieList.replaceChildren();
  movies.forEach((card) => movieList.appendChild(MovieCard(card)));
  movieList.style.display = "flex";
}

function renderEmptyMessage(sectionElement, movieListElement, term) {
  movieListElement.style.display = "none";
  const emptyMessage = EmptyMovieMessage(term);
  sectionElement.appendChild(emptyMessage);
}
