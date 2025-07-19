import { CardFilme } from "./CardFilme.js";
import { IconSearch } from "../../public/assets/icons/icons.js";
import { fetchAllFilmes } from "/src/services/filmeService.js";

export async function SectionFilme(titulo) {
  const { data: filmes } = await fetchAllFilmes();
  const cardListHTML = filmes.map((card) => CardFilme(card)).join("");

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
