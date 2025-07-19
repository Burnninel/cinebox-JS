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
          ${IconSearch()}
          <input type="text" placeholder="Pesquisar filme" />
        </div>
      </header>
      <ul class="explore__card-list">
          ${cardListHTML}
      </ul>
  `;

  return section;
}
