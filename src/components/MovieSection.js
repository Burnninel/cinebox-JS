import { MovieCard } from "./MovieCard.js";
import { EmptyMovieMessage } from "./EmptyMovieMessage.js";
import { IconSearch } from "../../public/assets/icons/icons.js";
import { fetchAllMovies } from "/src/services/movieService.js";

export async function MovieSection(titulo) {
  const { data: filmes } = await fetchAllMovies();
  const cardListHTML = filmes.map((card) => MovieCard(card)).join("");

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
          <input type="text" value="saldk" placeholder="Pesquisar filme" id="inputSearch" />
        </div>
      </header>
      <ul class="explore__card-list" id="movieList">
          ${cardListHTML}
      </ul>
  `;

  const searchButton = section.querySelector("#searchTerm");
  const searchInput = section.querySelector("#inputSearch");
  const movieList = section.querySelector("#movieList");

  async function search() {
    const searchTerm = searchInput.value;
    const { data: filteredMovies } = await fetchAllMovies(searchTerm);

    const existingEmptyMessage = section.querySelector(".no-results");
    if (existingEmptyMessage) existingEmptyMessage.remove();

    if (filteredMovies.length === 0) {
      movieList.style.display = "none";
      const emptyMessageElement = EmptyMovieMessage(searchTerm);
      section.append(emptyMessageElement);
      return;
    }

    const newListHTML = filteredMovies.map((card) => MovieCard(card)).join("");

    movieList.style.display = "flex";
    movieList.innerHTML = newListHTML;
  }

  searchButton.addEventListener("click", search);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });

  return section;
}
