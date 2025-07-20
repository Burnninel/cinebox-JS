import { MovieCard } from "./MovieCard.js";
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
          <input type="text" placeholder="Pesquisar filme" id="inputSearch" />
        </div>
      </header>
      <ul class="explore__card-list" id="movieList">
          ${cardListHTML}
      </ul>
  `;

  const btn = section.querySelector("#searchTerm");
  const input = section.querySelector("#inputSearch");
  const ul = section.querySelector("#movieList");

  async function search() {
    const searchTerm = input.value;
    const { data: filteredMovies } = await fetchAllMovies(searchTerm);
    const newListHTML = filteredMovies.map((card) => MovieCard(card)).join("");

    ul.innerHTML = newListHTML;
  }

  btn.addEventListener("click", search);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });

  return section;
}
